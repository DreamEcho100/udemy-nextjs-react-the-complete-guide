import { useRef, useState } from 'react';

import classes from './NewComment.module.css';

const NewComment = ({ onAddComment }) => {
	const [isInvalid, setIsInvalid] = useState(false);

	const emailInputRef = useRef();
	const nameInputRef = useRef();
	const commentInputRef = useRef();

	const sendCommentHandler = (event) => {
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

		onAddComment({
			email: enteredEmail,
			name: nameEmail,
			text: enteredComment,
		});
	};

	return (
		<form className={classes.form} onSubmit={sendCommentHandler}>
			<div className={classes.row}>
				<div className={classes.control}>
					<label htmlFor='email'>Your email</label>
					<input type='email' id='email' ref={emailInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='name'>Your name</label>
					<input type='text' id='name' ref={nameInputRef} />
				</div>
			</div>
			<div className={classes.control}>
				<label htmlFor='comment'>Your comment</label>
				<input type='text' id='comment' />
				<textarea
					name='comment'
					id='comment'
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
