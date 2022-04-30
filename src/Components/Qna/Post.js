import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import moment from 'moment';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Swal from 'sweetalert2';

const Post = ({ fetchPosts, addAnswer, fetchAnswers }) => {
    const [post, setPost] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [answer, setAnswer] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const getAnswers = async () => {
            const post = await getPost();
            const serverAnswers = await fetchAnswers();
            setAnswers(serverAnswers.data.filter(x => x.questionId === post.id));
            setLoading(true);
        }

        const getPost = async () => {
            const serverPosts = await fetchPosts();
            setLoading(false);
            setPost(serverPosts.data.find(x => x.id === Number(id)));
            return serverPosts.data.find(x => x.id === Number(id));
        }

        getAnswers();
    }, []);



    return (
        <>
            {
                !loading || !post ? (
                    <h2>Loading...</h2>
                ) : (
                    <div className="container ml-5 mt-4">
                        <div className='d-flex'>
                            <div className="col p-0" style={{ wordWrap: "break-word" }}>
                                <h4>{post.title}</h4>
                            </div>
                        </div>
                        <div className="d-flex">
                            <p>Asked on {moment(post.posted).format('MM/DD/YYYY')}</p>
                        </div>
                        <hr />
                        <div style={{ wordWrap: "break-word" }}>
                            {parse(post.body)}
                        </div>
                        <h3>{answers.length} answers</h3>
                        {
                            answers.map((answer, index) => {
                                if (answer.approved) {
                                    return <>
                                        <div key={index} style={{ wordWrap: "break-word" }}>
                                            {parse(answer.answer)}
                                        </div>
                                        <hr />
                                    </>
                                }
                            })
                        }
                        <form>
                            <div className="form-group mt-1">
                                <label style={{ fontSize: "25px" }}>Your Answer</label>
                                <CKEditor editor={ClassicEditor} data={answer} onReady={(editor) => {
                                    editor.editing.view.change((writer) => {
                                        writer.setStyle(
                                            "height",
                                            "250px",
                                            editor.editing.view.document.getRoot()
                                        );
                                    });
                                }} onChange={(e, editor) => {
                                    setAnswer(editor.getData());
                                }}></CKEditor>
                            </div>
                            <div className="form-group mt-4">
                                <button className="btn btn-primary btn-block" onClick={(e) => {
                                    e.preventDefault();

                                    if (!answer) {
                                        Swal.fire({
                                            title: 'Operation Failed!',
                                            text: 'The answer cannot be left empty',
                                            icon: 'error'
                                        });
                                    } else {
                                        addAnswer({ questionId: post.id, answer });
                                        Swal.fire({
                                            title: 'Posted!',
                                            text: 'Your answer was successfully posted',
                                            icon: 'success'
                                        }).then(function () {
                                            window.location.reload();
                                        });
                                    }
                                }}>Post your answer</button>
                            </div>
                        </form>
                    </div>
                )
            }
        </>

    )
}

export default Post