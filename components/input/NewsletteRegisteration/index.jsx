import { useRef } from 'react';

import classes from './NewsletteRegisteration.module.css';

const NewsletteRegisteration = () => {
	const emailInputRef = useRef();

	const registrationHandler = (event) => {
		event.preventDefault();

		const enteredEmail = emailInputRef.current.value;

		fetch('/api/v1/newsletter', {
			method: 'POST',
			body: JSON.stringify({ email: enteredEmail }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.error(error));
	};

	return (
		<section className={classes.newsletter}>
			<h2>Sign up to stay updated!</h2>
			<form onSubmit={registrationHandler}>
				<div className={classes.control}>
					<input
						type='email'
						id='email'
						placeholder='Your email'
						aria-label='Your email'
						ref={emailInputRef}
					/>
					<button>Register</button>
				</div>
			</form>
		</section>
	);
};

export default NewsletteRegisteration;
