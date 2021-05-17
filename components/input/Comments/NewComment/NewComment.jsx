import { useRef, useState } from 'react';

import classes from './NewComment.module.css';

const NewComment = ({ comments, setComments, onAddComment }) => {
	const [isInvalid, setIsInvalid] = useState(false);

	const emailInputRef = useRef();
	const nameInputRef = useRef();
	const commentInputRef = useRef();

	const sendCommentHandler = async (event) => {
		event.preventDefault();

		const enteredEmail = emailInputRef.current.value;
		const nameEmail = nameInputRef.current.value;
		const enteredComment = commentInputRef.current.value;

		if (
			!enteredEmail ||
			enteredEmail.trim() === '' ||
			!enteredEmail.includes('@') ||
			!nameEmail ||
			nameEmail.trim() === '' ||
			!enteredComment ||
			enteredComment.trim() === ''
		) {
			setIsInvalid(false);
			return;
		}

		const addedComment = await onAddComment({
			email: enteredEmail,
			name: nameEmail,
			text: enteredComment,
		});

		setComments([...comments, addedComment]);
	};

	return (
		<form className={classes.form} onSubmit={sendCommentHandler}>
			<div className={classes.row}>
				<div className={classes.control}>
					<label htmlFor='email'>Your email</label>
					<input
						type='email'
						id='email'
						required
						// placeholder='Enter your email...'
						ref={emailInputRef}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor='name'>Your name</label>
					<input
						type='text'
						id='name'
						required
						// placeholder='Enter your name...'
						ref={nameInputRef}
					/>
				</div>
			</div>
			<div className={classes.control}>
				<label htmlFor='comment'>Your comment</label>
				<textarea
					name='comment'
					id='comment'
					required
					// placeholder='Enter your comment...'
					rows='5'
					ref={commentInputRef}
				></textarea>
			</div>
			{isInvalid && <p>Please enter a valid email address and comment!</p>}
			<button className={classes.btn}>Submit</button>
		</form>
	);
};

export default NewComment;
