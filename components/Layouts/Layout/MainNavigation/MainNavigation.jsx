import Link from 'next/link';

import classes from './MainNavigation.module.css';

import Logo from './Logo/Logo';

const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<Link href='/'>
				<a>
					<Logo />
				</a>
			</Link>
			<nav>
				<ul>
					<li>
						<Link href='/posts'>Posts</Link>
					</li>
					<li>
						<Link href='/contact'>Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
