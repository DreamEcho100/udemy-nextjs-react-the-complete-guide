// import { useState, useEffect } from 'react';
// import { getSession } from 'next-auth/client';
import { useState } from 'react';

import classes from './ChangePassword.module.css';

import ProfileForm from './Form/Form';

const ChangePassword = () => {
	// const [isLoading, setIsLoading] = useState(true);

	// useEffect(() => {
	// 	getSession().then((session) => {
	// 		if (!session) {
	// 			window.location.href = '/auth';
	// 		} else {
	// 			setIsLoading(false);
	// 		}
	// 	});
	// }, []);

	// if (isLoading) {
	// 	return (
	// 		<p className={`${classes.profile} ${classes.loading}`}>Loading...</p>
	// 	);
	// }

	const [isPasswordChanging, setIsPasswordChanging] = useState(true);
	const [message, setMessage] = useState({
		status: '',
		message: '',
	});

	const changePasswordHandler = async (passwordData) => {
		setMessage({
			status: '',
			message: '',
		});
		/*const response = */ await fetch('/api/v1/user/change-password', {
			method: 'PATCH',
			body: JSON.stringify(passwordData),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				if (data.status === 'error') {
					setMessage({
						status: 'error',
						message: data.message || 'Something went wrong!',
					});
					return;
				}

				setMessage({
					status: 'success',
					message: data.message,
				});
			})
			.catch((error) => {
				setMessage({
					status: 'error',
					message: error.message || 'Something went wrong!',
				});
				// throw new Error(data.message || 'Something went wrong!');
			});
	};

	return (
		<section className={classes.ChangePassword}>
			<ProfileForm
				onChangePassword={changePasswordHandler}
				isPasswordChanging={isPasswordChanging}
				setIsPasswordChanging={setIsPasswordChanging}
				message={message}
				setMessage={setMessage}
			/>
		</section>
	);
};

export default ChangePassword;
