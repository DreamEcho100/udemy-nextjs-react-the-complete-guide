import classes from './Layout.module.css';

import MainHeader from './MainHeader/index';

const Layout = ({ children }) => {
	return (
		<>
			<MainHeader />
			<main className={classes.mainContent}>{children}</main>
		</>
	);
};

export default Layout;
