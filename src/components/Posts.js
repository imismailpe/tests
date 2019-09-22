import React from 'react';
import Post from './Post';

const Posts = ({feed,userlist,commentlist})=>{
	return(
		<div>
		<div className="postContainer">
		{
		feed.map(post=>{
			const postedby = userlist.filter(user=>user.id===post.userId);
			let commentsInthisPost = commentlist.filter(comment=>comment.postId===post.id);
			return(
				<Post key={post.id} post={post} postedby={postedby[0]} commentsInthisPost={commentsInthisPost}/>
			)	
		})
		}
		</div>
		</div>
	)
}

export default Posts;