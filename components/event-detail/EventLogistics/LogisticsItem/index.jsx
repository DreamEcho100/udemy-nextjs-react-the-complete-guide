// import classes from './LogisticsItem.module.css';
const classes = {
	item: 'event-detail__EventDetail__EventLogistics__LogisticsItem', // 'item'
	icon: 'icon',
	content: 'content',
};
import './LogisticsItem.scss';

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
