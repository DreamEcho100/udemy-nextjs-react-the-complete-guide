import classes from './LogisticsItem.module.css';

const LogisticsItem = ({ icon: Icon, children }) => {
	return (
		<div className={classes.item}>
			<span className={classes.icon}>
				<Icon />
			</span>
			<span className={classes.content}>{children}</span>
		</div>
	);
};

export default LogisticsItem;
