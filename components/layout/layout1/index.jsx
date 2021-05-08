// import classes from './Layout.module.css.module.css'
const classes = {
	mainContent: 'layout__layout1',
};

import './Layout.scss';

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
