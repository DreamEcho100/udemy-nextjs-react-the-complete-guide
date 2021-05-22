import { useState, useEffect } from 'react';
import { getSession } from 'next-auth/client';

import classes from './User.module.css';

import ProfileForm from './Form/Form';

const User = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getSession().then((session) => {
			if (!session) {
				window.location.href = '/auth';
			} else {
				setIsLoading(false);
			}
		});
	}, []);

	if (isLoading) {
		return (
			<p className={`${classes.profile} ${classes.loading}`}>Loading...</p>
		);
	}

	return (
		<section className={classes.profile}>
			<h1>Your User Profile</h1>
			<ProfileForm />
		</section>
	);
};

export default User;
