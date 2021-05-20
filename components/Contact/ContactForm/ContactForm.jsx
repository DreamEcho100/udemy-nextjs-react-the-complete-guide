import { useState, useEffect } from 'react';

import classes from './ContactForm.module.css';

import Notification from '../../UI/Notification/Notification';

const sendContactData = async (contactDetails) => {
	const response = await fetch('/api/v1/contact', {
		method: 'POST',
		body: JSON.stringify(contactDetails),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || 'Something went wrong!');
	}
};

const ContactForm = () => {
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredName, setEnteredName] = useState('');
	const [enteredMessage, setEnteredMessage] = useState('');
	const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
	const [requestError, setRequestError] = useState();

	useEffect(() => {
		if (requestStatus !== 'pending') {
			const timer = setTimeout(() => {
				setRequestStatus(null);
				setRequestError(null);
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [requestStatus]);

	const sendMessageHandler = async (event) => {
		event.preventDefault();

		// optional: add client-side validation

		setRequestStatus('pending');

		try {
			await sendContactData({
				email: enteredEmail,
				name: enteredName,
				message: enteredMessage,
			});
			setRequestStatus('success');
			setEnteredMessage('');
			setEnteredEmail('');
			setEnteredName('');
		} catch (error) {
			setRequestError(error.message);
			setRequestStatus('error');
		}
	};

	const notification =
		requestStatus === 'pending'
			? {
					status: 'pending',
					title: 'Sending message...',
					message: "Your message is on it's way!",
			  }
			: requestStatus === 'success'
			? {
					status: 'success',
					title: 'Success!',
					message: 'Message sent successfully!',
			  }
			: requestStatus === 'error'
			? {
					status: 'error',
					title: 'Error!',
					message: requestError,
			  }
			: null;

	return (
		<section className={classes.contact}>
			<h1>How can I help you?</h1>
			<form className={classes.form} onSubmit={sendMessageHandler}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor='name'>Your Name</label>
						<input
							type='text'
							id='name'
							required
							value={enteredName}
							onChange={(event) => setEnteredName(event.target.value)}
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor='email'>Your Email</label>
						<input
							type='email'
							id='email'
							required
							value={enteredEmail}
							onChange={(event) => setEnteredEmail(event.target.value)}
						/>
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor='message'>Your Message</label>
					<textarea
						id='message'
						rows='5'
						value={enteredMessage}
						onChange={(event) => setEnteredMessage(event.target.value)}
					></textarea>
				</div>

				<div className={classes.actions}>
					<button>Send Message</button>
				</div>
			</form>
			{notification && (
				<Notification
					{...notification}
					// status={notification.status}
					// title={notification.title}
					// message={notification.message}
				/>
			)}
		</section>
	);
};

export default ContactForm;
