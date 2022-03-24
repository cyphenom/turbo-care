import { useEffect, useState } from 'react';
import SideVideo from './SideVideo';

const PlayVideoDetails = ({ fetchVideos }) => {
    const [videos, setVideos] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getVideos = async () => {
            const serverVideos = await fetchVideos();
            serverVideos.sort(() => Math.random() - 0.5);
            setVideos(serverVideos.slice(0, 10));
            setLoading(false);
        }

        getVideos();
    }, [fetchVideos]);

    return (
        <>
            {
                loading || !videos ? (
                    'loading'
                ) : (
                    videos.map((video) => (
                        <SideVideo key={video.id} video={video} />
                    ))
                )
            }
        </>

    )
}

export default PlayVideoDetails