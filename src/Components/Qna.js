import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Posts from './Qna/Posts';
import Pagination from './Qna/Pagination';
import AskQuestion from './Qna/AskQuestion';
import Search from './Qna/Search';
import PostResults from './Qna/PostResults';
import Post from './Qna/Post';
import Navbar from './Qna/Navbar';

function Qna() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(false);
      const serverPosts = await fetchPosts();
      setPosts(serverPosts.data);
      setLoading(true);
    }

    getPosts();
  }, [refresh]);

  const fetchPosts = async () => {
    return await axios.get('http://localhost:8000/hfia3h4q38ytwh389hgwiorehghwihg4w8t9hwhegrfwrhguwi45pgusoerhg89w4ygh/posts');
  }

  const fetchAnswers = async () => {
    return await axios.get('http://localhost:8000/hfia3h4q38ytwh389hgwiorehghwihg4w8t9hwhegrfwrhguwi45pgusoerhg89w4ygh/answers');
  }

  const addPost = async (post) => {
    await axios.post('http://localhost:8000/hfia3h4q38ytwh389hgwiorehghwihg4w8t9hwhegrfwrhguwi45pgusoerhg89w4ygh/addPost', post, {
      headers: {
        'Content-type': 'application/json'
      }
    });
  }

  const addAnswer = async (answer) => {
    await axios.post('http://localhost:8000/hfia3h4q38ytwh389hgwiorehghwihg4w8t9hwhegrfwrhguwi45pgusoerhg89w4ygh/addAnswer', answer, {
      headers: {
        'Content-type': 'application/json'
      }
    });
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Routes> bootstrap.css
      <Route path="/" element={
        <div className="mt-5">
          <div className="mb-4">
            <Navbar></Navbar>
          </div>
          <div className="mb-4">
            <Search></Search>
          </div>
          <div className="d-flex">
            <div className="col p-0">
              <h1 className="text-primary">Recent Questions</h1>
            </div>
            <div className="mt-1">
              <a href="/questions/ask" className="btn btn-primary">Ask a question</a>
            </div>
          </div>
          <Posts posts={currentPosts} loading={loading}></Posts>
          <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}></Pagination>
        </div>
      }></Route>
      <Route path="/results" element={<PostResults fetchPosts={fetchPosts}></PostResults>} />
      <Route path="/questions/ask" element={<AskQuestion addPost={addPost} refresh={refresh} setRefresh={setRefresh}></AskQuestion>}></Route>
      <Route path="/questions/:id" element={<Post fetchPosts={fetchPosts} addAnswer={addAnswer} fetchAnswers={fetchAnswers}></Post>}></Route>
    </Routes>
  );
}

export default Qna;
