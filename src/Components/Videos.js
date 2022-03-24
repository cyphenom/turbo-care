import Video from './Video';
import Banner from '../Assets/banner.png';

const Videos = ({ videos }) => {
    return (
        <div className="container">
            <div className="banner">
                <img src={Banner} alt="banner" />
            </div>
            <div className="list-container">
                {videos.map((video) => (
                    <Video key={video.id} video={video} />
                ))}
            </div>
        </div>
    )
}

export default Videos