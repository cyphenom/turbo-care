import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlayVideoDetails from './PlayVideoDetails';
import PlayVideoSidebar from './PlayVideoSidebar';
const PlayVideo = ({ fetchComments, fetchVideos, onAdd }) => {
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getComments = async () => {
      const result = await getVideo();
      const serverComments = await fetchComments();
      setComments(serverComments.filter(x => x.video === result.id));
      setLoading(false);
    }

    const getVideo = async () => {
      const serverVideo = await fetchVideos();
      setVideo(serverVideo.find(x => x.id === Number(id)));
      return serverVideo.find(x => x.id === Number(id));
    }

    getComments();
  }, [fetchVideos, fetchComments, id]);

  return (
    <>
      {
        loading || !video ? (
          'loading'
        ) : (
          <div className="container play-container">
            <div className="row">
              <div className="play-video">
                <PlayVideoDetails comments={comments} video={video} onAdd={onAdd} />
              </div>
              <div className="right-sidebar">
                <PlayVideoSidebar fetchVideos={fetchVideos}/>
              </div>
            </div>
          </div>
        )
      } 
    </>

  )
}

export default PlayVideo