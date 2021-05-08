import MainHeader from './MainHeader/index';

const Layout = ({ children }) => {
	return (
		<>
			<MainHeader />
			<main>{children}</main>
		</>
	);
};

export default Layout;
