const Posts = ({ posts, loading }) => {
    if (!loading) {
        return <h2>Loading...</h2>;
    }

    return <ul className="list-group mb-4">
        {posts.map(post => (
            <li key={post.id} className="list-group-item" style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
                <a href={`/questions/${post.id}`} style={{ textDecoration: "none", color: "black" }}>{post.title}</a>
            </li>
        ))}
    </ul>
}

export default Posts