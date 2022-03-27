import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Videos from './Components/Videos';
import PlayVideo from './Components/PlayVideo';
import VideoResults from './Components/VideoResults';
import WarrantyClaim from './Components/WarrantyClaim';

function App() {
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);
  // const [videosFound, setFoundVideos] = useState(null);

  useEffect(() => {
    const getVideos = async () => {
      const serverVideos = await fetchVideos();
      serverVideos.sort(() => Math.random() - 0.5);
      setVideos(serverVideos.slice(0, 15))
    }

    const getComments = async () => {
      const serverComments = await fetchComments();
      setComments(serverComments)
    }

    getComments();
    getVideos();
  }, []);

  const fetchVideos = async () => {
    const res = await fetch(`http://localhost:5000/videos?disabled=false`);
    const data = await res.json();

    return data;
  }

  const fetchComments = async () => {
    const res = await fetch(`http://localhost:5000/comments`);
    const data = await res.json();

    return data;
  }

  const addComment = async (comment) => {
    const res = await fetch("http://localhost:5000/comments", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(comment)
    });

    const data = await res.json();
    setComments([...comments, data]);
  }

  return (
    <Router>
        <Header />
        <Sidebar fetchVideos={fetchVideos} />
      <Routes>
        <Route path="/" exact element={<Videos videos={videos} />} />
        <Route path="/warranty_claim" exact element={<WarrantyClaim />} />
        <Route path="/video/:id" element={<PlayVideo fetchComments={fetchComments} fetchVideos={fetchVideos} onAdd={addComment} />} />
        <Route path="/results" element={<VideoResults fetchVideos={fetchVideos} />} />
      </Routes>
        <Helmet>
          <script src="./main.js"></script>
        </Helmet>
    </Router>
  );
}

export default App;
