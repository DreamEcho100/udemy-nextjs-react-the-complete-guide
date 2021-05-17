import { useContext } from 'react';

import classes from './Layout.module.css';

import MainHeader from './MainHeader/MainHeader';
import NotificationContext from '../../../store/notification-context';
import Notification from '../../ui/Notification/Notification';

const Layout = ({ children }) => {
	const notificationCtx = useContext(NotificationContext);

	const activeNotification = notificationCtx.notification;

	return (
		<>
			<MainHeader />
			<main className={classes.mainContent}>{children}</main>
			{activeNotification && (
				<Notification
					{...activeNotification} /* { title, message, status } */
				/>
			)}
		</>
	);
};

export default Layout;
