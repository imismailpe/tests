import React from 'react';
import Comment from './Comment';

const CommentsList = ({comments}) =>{
	return(
		<div className="commentsContainer">
		{	
			comments.map(comment=>{
				return <Comment key={comment.id} thisComment={comment} />;
			})
		}
		</div>
	)
}

export default CommentsList;