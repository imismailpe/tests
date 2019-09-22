import React,{useState,useEffect} from 'react';
import CommentsList from './CommentsList';
//import {BrowserView,MobileView} from 'react-device-detect';

const Post = ({post,postedby,commentsInthisPost})=>{
	const [commentStatus,setCommentStatus] = useState(false);
	const handleStatusChange = ()=>{
		setCommentStatus(!commentStatus);
	}
	useEffect(()=>{
		//console.log("inside useeffect--",commentStatus);
	})
	return(
		<div className="postCard">
			<div className="postTitle">
				{`${post.title}`}
			</div>
		<div className="postBody">
			{`${post.body}`}
		</div>
		<div className="postedBy">{`By: ${postedby.name}`}</div>
		<div className="commentCount" onMouseEnter={handleStatusChange}>
			{`${commentsInthisPost.length} comments`}
		</div>
		<div onMouseLeave={handleStatusChange}>
		{commentStatus && <CommentsList comments={commentsInthisPost}/>}
		</div>
		</div>
	)
}
export default Post;