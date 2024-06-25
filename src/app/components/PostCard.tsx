import {Post} from "../../../types"

interface PostCardProps {
    post: Post
}

export default function PostCard({post}: PostCardProps) {
    return (
		<div className='card' key={post.id}>
            <h2>{post.title}</h2><br />
			<p>{post.body}</p>
		</div>
	)
}