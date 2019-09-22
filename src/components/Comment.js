import React from 'react';

const Comment = ({thisComment}) =>{
	return(
		<div className="commentCard">
			<div className="comment">
				{`${thisComment.email}: ${thisComment.body}`}
			</div>
		</div>
		)
}

export default Comment;