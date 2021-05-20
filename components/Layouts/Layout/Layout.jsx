import classes from './Layout1.module.css';

import MainNavigation from './MainNavigation/MainNavigation';

const Layout1 = ({ children }) => {
	return (
		<>
			<MainNavigation />
			<main className={classes.main}>{children}</main>
		</>
	);
};

export default Layout1;
