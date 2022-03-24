import { Link } from 'react-router-dom';

const Video = ({ video }) => {
    return (
        <div className="side-video-list">
            <Link to={"/video/" + video.id} className="small-thumbnail"><img src={require("../Assets/" + video.thumbnail + ".png")} /></Link>
            <div className="vid-info">
                <Link to={"/video/" + video.id}>{video.title}</Link>
            </div>
        </div>
    )
}

export default Video