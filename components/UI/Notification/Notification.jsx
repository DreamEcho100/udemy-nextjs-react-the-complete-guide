import { useContext, useEffect } from 'react';

import classes from './Notification.module.css';

// import NotificationContext from '../../../store/notification-context';

const Notification = ({ title, message, status }) => {
	// const notificationCtx = useContext(NotificationContext);

	const statusClasses =
		status === 'success'
			? classes.success
			: status === 'error'
			? classes.error
			: status === 'pending'
			? classes.pending
			: null;

	const cssClasses = `${classes.notification} ${statusClasses}`;

	return (
		<div className={cssClasses}>
			<h2>{title}</h2>
			<p>{message}</p>
		</div>
	);

	return (
		<div className={classes.notification}>
			<div className={`${classes.container} ${statusClasses}`}>
				<h2>{title}</h2>
				<p>{message}</p>
				<div className={classes.closeBtnContainer}>
					<div
						className={classes.closeBtn}
						// onClick={notificationCtx.hideNotification}
					></div>
				</div>
			</div>
		</div>
	);
};

export default Notification;
