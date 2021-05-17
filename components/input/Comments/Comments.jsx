import { useContext, useEffect, useState } from 'react';

import classes from './Comments.module.css';

import NotificationContext from '../../../store/notification-context';

import CommentList from './CommentList/CommentList';
import NewComment from './NewComment/NewComment';

const Comments = ({ eventId }) => {
	const [showComments, setShowComments] = useState(false);
	const [comments, setComments] = useState([]);
	const [fetchingComments, setFetchingComments] = useState({
		status: '',
	});

	const notificationCtx = useContext(NotificationContext);

	useEffect(async () => {
		if (showComments && comments) {
			setFetchingComments({ status: 'pending', message: 'pending' });
			const response = await fetch(`/api/v1/comments/${eventId}`);
			console.log(response.ok);
			if (response.ok) {
				const data = await response.json();
				setFetchingComments({ status: 'success', message: 'success' });
				setComments(data.comments);
				return;
			}
			setFetchingComments({ status: 'error', message: response.statusText });
		}
	}, [showComments]);

	const toggleCommentsHandler = () => {
		setShowComments((prevStatus) => !prevStatus);
	};

	const addCommentHandler = async (commentData) => {
		notificationCtx.showNotification({
			title: 'Sending comment...',
			message: 'Your comment is currently being stored into a database.',
			status: 'pending',
		});

		return await fetch(`/api/v1/comments/${eventId}`, {
			method: 'POST',
			body: JSON.stringify(commentData),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}

				return response.json().then((data) => {
					throw new Error(data.message || 'Something went wrong!');
				});
			})
			.then((data) => {
				notificationCtx.showNotification({
					title: 'Success!',
					message: 'Your comment was saved!',
					status: 'success',
				});

				return data.comment;
			})
			.catch((error) => {
				notificationCtx.showNotification({
					title: 'Error!',
					message: error.message || 'Something went wrong!',
					status: 'error',
				});

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
			{showComments && fetchingComments.status === 'pending' && (
				<p>Loading...</p>
			)}
			{showComments && fetchingComments.status === 'error' && (
				<p>{fetchingComments.message}</p>
			)}
		</section>
	);
};

export default Comments;
