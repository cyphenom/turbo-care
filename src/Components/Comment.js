const Comment = ({ comment }) => {
    return (
        <div className="old-comment">
            <div>
                <h3>{comment.email} <span>2 days ago</span></h3>
                <p>{comment.comment}</p>
                <div className="action">
                    <span>REPLY</span>
                    <a href="">All replies</a>
                </div>
            </div>
        </div>
    )
}

export default Comment