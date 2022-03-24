import { Link } from 'react-router-dom';

const Video = ({ video }) => {
    return (
        <div className="vid-list">
            <Link to={"/video/" + video.id}><img src={require("../Assets/" + video.thumbnail + ".png")} className="thumbnail" /></Link>
            <div className="flex-div">
                <div className="vid-info">
                    <Link to={"/video/" + video.id}>{video.title}</Link>
                </div>
            </div>
        </div>
    )
}

export default Video