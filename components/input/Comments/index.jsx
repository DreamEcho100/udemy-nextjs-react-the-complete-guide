import { useEffect, useState } from 'react';

import classes from './Comments.module.css';

import CommentList from './CommentList/index';
import NewComment from './NewComment/index';

const Comments = ({ eventId }) => {
	const [showComments, setShowComments] = useState(false);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		if (setShowComments) {
			fetch(`/api/v1/comments/${eventId}`)
				.then((response) => response.json())
				.then((data) => setComments(data.comments))
				.catch((error) => console.error(error));
		}
	}, [showComments]);

	const toggleCommentsHandler = () => {
		setShowComments((prevStatus) => !prevStatus);
	};

	const addCommentHandler = (commentData) => {
		fetch(`/api/v1/comments/${eventId}`, {
			method: 'POST',
			body: JSON.stringify(commentData),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.error(error));
	};

	return (
		<section className={classes.comments}>
			<button onClick={toggleCommentsHandler}>
				{showComments ? 'Hide' : 'Show'} Comments
			</button>
			{showComments && <NewComment onAddComment={addCommentHandler} />}
			{showComments && <CommentList items={comments} />}
		</section>
	);
};

export default Comments;
