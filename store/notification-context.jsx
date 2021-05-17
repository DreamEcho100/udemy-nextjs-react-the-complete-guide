import { createContext, useState, useEffect } from 'react';
const NotificationContext = createContext({
	notification: null, // { title, message, status }
	showNotification: function (notificationData) {},
	hideNotification: function () {},
});

export const NotificationContextProvider = ({ children }) => {
	const [activeNotification, setActiveNotification] = useState();

	const showNotificationHandler = (notificationData) =>
		setActiveNotification(notificationData);

	const hideNotificationHandler = () => setActiveNotification(null);

	const context = {
		notification: activeNotification,
		showNotification: showNotificationHandler,
		hideNotification: hideNotificationHandler,
	};

	useEffect(() => {
		if (activeNotification && activeNotification.status !== 'pending') {
			const timer = setTimeout(() => {
				setActiveNotification(null);
				clearTimeout(timer);
			}, 3000);
		}
	}, [activeNotification]);

	return (
		<NotificationContext.Provider value={context}>
			{children}
		</NotificationContext.Provider>
	);
};

export default NotificationContext;
