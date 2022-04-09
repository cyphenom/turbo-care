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
            const type = searchParams.get('type');
            const tags = searchParams.get('tags') ? searchParams.get('tags').split(',') : null;
            const serverVideos = await fetchVideos();

            if (type === "advanced") {
                var foundVideos = [];
                for (var i = 0; i < tags.filter(value => value).length; i++) {
                    var filtered = serverVideos.filter(video => video.tags.includes(tags.filter(tag => tag)[i]));
                    foundVideos = [...foundVideos, ...filtered];
                }

                console.log(tags.every(tag => tag === "false"));
                console.log(tags);

                setVideos(q ? (tags.every(tag => tag === "false") ? serverVideos.filter(x => x.title.toLowerCase().includes(q.toLowerCase())) : foundVideos.filter(x => x.title.toLowerCase().includes(q.toLowerCase()))) : foundVideos);
            } else {
                setVideos(serverVideos.filter(x => x.title.toLowerCase().includes(q.toLowerCase())));
            }
            
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