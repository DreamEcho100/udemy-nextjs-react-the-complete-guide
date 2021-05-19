import MainNavigation from './MainNavigation/MainNavigation';

const Layout1 = ({ children }) => {
	return (
		<>
			<MainNavigation />
			<main>{children}</main>
		</>
	);
};

export default Layout1;
