import { useRef, useState } from 'react';

import classes from './NewComment.module.css';

const NewComment = ({ onAddComment }) => {
	const [isInvalid, setIsInvalid] = useState(false);

	const emailInputRef = useRef();
	const commentInputRef = useRef();

	const sendCommentHandler = (event) => {
		event.preventDefault();

		const enteredEmail = emailInputRef.current.value;
		const enteredComment = commentInputRef.current.value;

		if (
			!enteredEmail ||
			enteredEmail.trim() === '' ||
			!enteredEmail.includes('@') ||
			!enteredComment ||
			enteredComment.trim() === ''
		) {
			setIsInvalid(false);
			return;
		}

		onAddComment({
			email: enteredEmail,
			text: enteredComment,
		});
	};

	return (
		<form className={classes.form}>
			<div className={classes.row}>
				<div className={classes.control}>
					<label htmlFor='email'>Your email</label>
					<input type='email' id='email' />
				</div>
				<div className={classes.control}>
					<label htmlFor='name'>Your name</label>
					<input type='text' id='name' />
				</div>
			</div>
			<div className={classes.control}>
				<label htmlFor='comment'>Your comment</label>
				<input type='text' id='comment' />
				<textarea name='comment' id='comment' rows='5'></textarea>
			</div>
			{isInvalid && <p>Please enter a valid email address and comment!</p>}
			<button>Submit</button>
		</form>
	);
};

export default NewComment;
