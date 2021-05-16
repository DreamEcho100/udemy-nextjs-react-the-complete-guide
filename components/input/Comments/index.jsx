import { useState } from 'react';

import classes from './Comments.module.css';

import CommentList from './CommentList/index';
import NewComment from './NewComment/index';

const Comments = ({ eventId }) => {
	const [showComments, setShowComments] = useState(false);

	const toggleCommentsHandler = () => {
		setShowComments((prevStatus) => !prevStatus);
	};

	const addCommentHandler = (commentData) => {
		// send data to API
	};

	return (
		<section className={classes.comments}>
			<button onClick={toggleCommentsHandler}>
				{showComments ? 'Hide' : 'Show'} Comment
			</button>
			{showComments && <NewComment onAddComment={addCommentHandler} />}
			{setShowComments && <CommentList />}
		</section>
	);
};

export default Comments;
