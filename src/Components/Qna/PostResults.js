import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import Posts from './Posts';
import Search from './Search';
import Pagination from './Pagination';

const PostResults = ({ fetchPosts }) => {
    const [searchParams] = useSearchParams();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const getPosts = async () => {
            const q = searchParams.get('q');

            setLoading(false);
            const serverPosts = await fetchPosts();
            setPosts(serverPosts.data.filter(x => x.title.toLowerCase().includes(q.toLowerCase())));
            setLoading(true);
        }

        getPosts();
    }, [fetchPosts, searchParams]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            {
                !loading || !posts ? (
                    ''
                ) : (
                    <div className="container mt-5">
                        <div className="mb-4">
                            <Search></Search>
                        </div>
                        <div className="d-flex">
                            <div className="col p-0">
                                <h1 className="text-primary">Searched Questions</h1>
                            </div>
                            <div className="mt-1">
                                <a href="/questions/ask" className="btn btn-primary">Ask a question</a>
                            </div>
                        </div>
                        <Posts posts={currentPosts} loading={loading}></Posts>
                        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}></Pagination>
                    </div>
                )
            }
        </>
    )
}

export default PostResults