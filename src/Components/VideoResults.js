import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import Video from './Video';

const VideoResults = ({ fetchVideos }) => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const getVideos = async () => {
            const q = searchParams.get('q');
            console.log(searchParams.get('type'))
            const serverVideos = await fetchVideos();
            setVideos(serverVideos.filter(x => x.title.toLowerCase().includes(q.toLowerCase())));
            setLoading(false);
        }

        getVideos();
    }, [fetchVideos, searchParams]);

    return (
        <>
            {
                loading || !videos ? (
                    'loading'
                ) : (
                    <div className="container">
                        <div className="list-container">
                            {videos.map((video) => (
                                <Video key={video.id} video={video} />
                            ))}
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default VideoResults