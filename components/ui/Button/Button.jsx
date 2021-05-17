import Link from 'next/link';

import classes from './Button.module.css';

const Button = ({ className, link, onClick, children }) => {
	if (link) {
		return (
			<Link href={link}>
				<a className={`${classes.btn}${className ? ` ${className}` : ''}`}>
					{children}
				</a>
			</Link>
		);
	}

	return (
		<button
			className={`${classes.btn}${className ? ` ${className}` : ''}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
