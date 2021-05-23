/*
// import { useState, useEffect } from 'react';
// import { getSession } from 'next-auth/client';
import { useState } from 'react';

import classes from './User.module.css';

import ProfileForm from './Form/Form';

const User = () => {
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
		 await fetch('/api/v1/user/change-password', {
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
		<section className={classes.profile}>
			<h1>Your User Profile</h1>
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

export default User;
*/
import React, { useState, Fragment } from 'react';

import classes from './User.module.css';

import ChangePassword from './ChangePassword/ChangePassword';
import Modal from '../../UI/Modal/Modal';

const User = () => {
	const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

	return (
		<section className={classes.profile}>
			<h1>Your User Profile</h1>
			<button
				className={classes.btn}
				onClick={() => setShowChangePasswordModal(true)}
			>
				Change Password
			</button>
			{showChangePasswordModal && (
				<Modal click={() => setShowChangePasswordModal(false)}>
					<Fragment key='header'>
						<h3>Change Password</h3>
					</Fragment>
					<Fragment key='body'>
						<ChangePassword />
					</Fragment>
				</Modal>
			)}
		</section>
	);
};

export default User;
