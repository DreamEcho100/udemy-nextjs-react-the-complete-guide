import Link from 'next/link';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<Link href='/'>
				<a>{/* <Logo /> */}</a>
			</Link>
			<nav>
				<ul>
					<li></li>
					<li></li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
