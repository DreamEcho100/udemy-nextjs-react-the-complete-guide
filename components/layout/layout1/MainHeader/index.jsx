import Link from 'next/link';

// import classes from './MainHeader.module.css';
const classes = {
	mainHeader: 'header__MainHeader', // header
	logo: 'logo',
	navigation: 'navigation',
};

import './MainHeader.scss';

const MainHeader = () => {
	return (
		<header className={classes.mainHeader}>
			<div className={classes.logo}>
				<Link href='/'>NextEvents</Link>
			</div>
			<nav className={classes.navigation}>
				<ul>
					<li>
						<Link href='/events'>Browse All Events</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;
