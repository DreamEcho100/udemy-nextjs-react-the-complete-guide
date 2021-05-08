import Link from 'next/link';

// import classes from './button.module.css';
const classes = {
	btn: 'ui__Button', // 'btn',
};

const Button = ({ link, children }) => {
	return (
		<Link href={link}>
			<a className={classes.btn}>{children}</a>
		</Link>
	);
};

export default Button;
