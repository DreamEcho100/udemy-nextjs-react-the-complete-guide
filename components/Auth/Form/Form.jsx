import { useState, useRef, useEffect } from 'react';
import { getSession, signIn } from 'next-auth/client';
import { useRouter } from 'next/router';

import classes from './Form.module.css';

const createUser = async (email, password) => {
	const response = await fetch('api/auth/signup', {
		method: 'POST',
		body: JSON.stringify({ email, password }),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || 'Something went wrong!');
	}

	return data;
};

const logInUser = async (email, password) => {
	const result = await signIn('credentials', {
		redirect: false,
		email,
		password,
	});

	if (result.error) {
		throw new Error(result.error || 'Something went wrong!');
	}

	return result;
};

const Form = () => {
	const router = useRouter();

	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const [isLogin, setIsLogin] = useState(true);
	const [errorMessage, setErrorMessage] = useState(true);
	const [btnsDisabled, setBtnsDisabled] = useState(false);

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getSession().then((session) => {
			if (session) {
				// window.location.href = '/';
				router.replace('/profile');
			} else {
				setIsLoading(false);
			}
		});
	}, []);

	const clearInputsForm = () => {
		emailInputRef.current.value = '';
		passwordInputRef.current.value = '';
	};

	const switchAuthModeHandler = () => {
		setErrorMessage('');
		setIsLogin((prevState) => !prevState);
		setBtnsDisabled(false);
		clearInputsForm();
	};

	const submitHandler = async (event) => {
		event.preventDefault();

		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;

		// optional: Add validation

		try {
			setErrorMessage('');
			setBtnsDisabled(true);
			if (isLogin) {
				const result = await logInUser(enteredEmail, enteredPassword);
				window.location.href = '/';
			} else {
				const result = await createUser(enteredEmail, enteredPassword);
				setIsLogin(true);
				setBtnsDisabled(false);
			}
			clearInputsForm();
		} catch (error) {
			console.error(error.message);
			setErrorMessage(error.message);
			setBtnsDisabled(false);
		}
	};

	if (isLoading) {
		return <p className={`${classes.auth} ${classes.loading}`}>Loading...</p>;
	}

	return (
		<section className={classes.auth}>
			<h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='email'>Your Email</label>
					<input type='email' id='email' required ref={emailInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='password'>Your Password</label>
					<input
						type='password'
						id='password'
						required
						ref={passwordInputRef}
					/>
				</div>
				{errorMessage.length !== 0 && (
					<div className={classes.warning}>
						<p>{errorMessage}</p>
					</div>
				)}
				<div className={classes.actions}>
					<button
						disabled={btnsDisabled}
						type='submit'
						className={classes.submitBtn}
					>
						{isLogin ? 'Login' : 'Create Account'}
					</button>
					<button
						disabled={btnsDisabled}
						type='button'
						className={classes.toggleBtn}
						onClick={switchAuthModeHandler}
					>
						{isLogin ? 'Create new account' : 'Login with existing account'}
					</button>
				</div>
			</form>
		</section>
	);
};

export default Form;
