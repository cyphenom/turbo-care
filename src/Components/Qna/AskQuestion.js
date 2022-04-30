import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Swal from 'sweetalert2';

const AskQuestion = ({ addPost, refresh, setRefresh }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [model, setModel] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    return (
        <div className="container">
            <form className="mt-5">
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="e.g. (johndoe@gmail.com john@turboairinc.com cooldude@protonmail.com)" onChange={(e) => {
                        setEmail(e.target.value);
                    }}></input>
                    <small className="form-text text-muted">Provide an email so we can identify people who ask questions and people who answer</small>
                </div>
                <div className="form-group mt-2">
                    <label>Model</label>
                    <input type="text" className="form-control" placeholder="e.g. (MST-48-N TSF-23SD-N TOM-50B-N)" onChange={(e) => {
                        setModel(e.target.value);
                    }}></input>
                    <small className="form-text text-muted">Input a model id so we can provide the correct assistance</small>
                </div>
                <div className="form-group mt-2">
                    <label>Title</label>
                    <input type="text" className="form-control" placeholder="e.g. How do you fix a broken pipe in a refrigerator?" onChange={(e) => {
                        setTitle(e.target.value);
                    }}></input>
                    <small className="form-text text-muted">Be specific and imagine you're asking a question to another person</small>
                </div>
                <div className="form-group mt-2">
                    <label>Body</label>
                    <CKEditor editor={ClassicEditor} data={body} onReady={(editor) => {
                        editor.editing.view.change((writer) => {
                            writer.setStyle(
                                "height",
                                "250px",
                                editor.editing.view.document.getRoot()
                            );
                        });
                    }} onChange={(e, editor) => {
                        setBody(editor.getData());
                    }}></CKEditor>
                </div>
                <div className="form-group mt-4">
                    <button className="btn btn-primary btn-block" onClick={(e) => {
                        e.preventDefault();

                        if (!email || !title || !body) {
                            Swal.fire({
                                title: 'Operation Failed!',
                                text: 'The email, title, or body field is left empty',
                                icon: 'error'
                            });
                        } else {
                            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
                                addPost({ email, model, title, body });
                                Swal.fire({
                                    title: 'Posted!',
                                    text: 'Your question was successfully posted',
                                    icon: 'success'
                                }).then(function () {
                                    setRefresh(!refresh);
                                    navigate('/');
                                });
                            } else {
                                Swal.fire({
                                    title: 'Operation Failed!',
                                    text: 'The email entered is not valid',
                                    icon: 'error'
                                });
                            }
                        }
                    }}>Post your question</button>
                </div>
            </form>
        </div>
    )
}

export default AskQuestion