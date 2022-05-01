import { useState } from 'react';
import Comment from './Comment';
import Share from '../Assets/share.png';

const PlayVideoDetails = ({ comments, video, onAdd }) => {
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [time, setTime] = useState('');

    var tags = [];
    for (var i = 0; i < video.tags.length; i++) {
        tags.push(<a href="" key={i}>#{video.tags[i]}</a>);
        tags.push(" ");
    }

    const onClick = (e) => {
        e.preventDefault();

        const videoId = video.id;
        setTime(new Date());
        console.log(videoId);

        if (!email) {
            alert('Please add a email');
            return;
        } else if (!comment) {
            alert('Please add text in your comment');
            return;
        }

        console.log({ video: videoId, email, comment, time })

        onAdd({ video: videoId, email, comment });
        setEmail('');
        setComment('');
        setTime('');
    }

    return (
        <>
            <iframe className="video" width="1012" height="759" src={"https://www.youtube-nocookie.com/embed/" + video.videoId} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className="tags">
                {tags}
            </div>
            <h3>{video.title}</h3>
            <div className="play-video-info">
                <div>
                    <a href=""><img src={Share} />Share</a>
                </div>
            </div>
            <hr />
            <div className="vid-description">
                <p>{video.description}</p>
                <hr />
                <h4>{comments.length} Comments</h4>
                <div className="add-comment">
                    <input type="email" placeholder="Enter email..." value={email} onChange={(e) => setEmail(e.target.value)} ></input>
                    <input type="text" placeholder="Add a comment..." value={comment} onChange={(e) => setComment(e.target.value)} />
                    <button type="button" onClick={onClick}>Comment</button>
                </div>
                {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                ))}
            </div>
        </>
    )
}

export default PlayVideoDetails