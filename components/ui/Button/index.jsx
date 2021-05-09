import Link from 'next/link';

// import classes from './Button.module.css';
const classes = {
	btn: 'ui__Button', // 'btn',
};

import './Button.scss';

const Button = ({ link, onClick, children }) => {
	if (link) {
		return (
			<Link href={link}>
				<a className={classes.btn}>{children}</a>
			</Link>
		);
	}

	return (
		<button className={classes.btn} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
