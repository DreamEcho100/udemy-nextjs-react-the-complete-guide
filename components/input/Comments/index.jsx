import { useEffect, useState } from 'react';

import classes from './Comments.module.css';

import CommentList from './CommentList/index';
import NewComment from './NewComment/index';

const Comments = ({ eventId }) => {
	const [showComments, setShowComments] = useState(false);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		if (showComments && comments.length === 0) {
			fetch(`/api/v1/comments/${eventId}`)
				.then((response) => response.json())
				.then((data) => setComments(data.comments))
				.catch((error) => console.error(error));
		}
	}, [showComments]);

	const toggleCommentsHandler = () => {
		setShowComments((prevStatus) => !prevStatus);
	};

	const addCommentHandler = async (commentData) => {
		return await fetch(`/api/v1/comments/${eventId}`, {
			method: 'POST',
			body: JSON.stringify(commentData),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => data.comment)
			.catch((error) => {
				console.error(error);
				return {};
			});
	};

	return (
		<section className={classes.comments}>
			<button onClick={toggleCommentsHandler}>
				{showComments ? 'Hide' : 'Show'} Comments
			</button>
			{showComments && (
				<NewComment
					comments={comments}
					setComments={setComments}
					onAddComment={addCommentHandler}
				/>
			)}
			{showComments && <CommentList items={comments} />}
		</section>
	);
};

export default Comments;
