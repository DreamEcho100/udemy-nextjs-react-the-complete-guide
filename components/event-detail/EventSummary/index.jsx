// import classes from 'EventSummary.module.css';
const classes = {
	summary: 'event-detail__EventDetail__EventSummary', // summary,
};
import './EventSummary.scss';

const EventSummary = ({ title }) => {
	return (
		<section className={classes.summary}>
			<h1>{title}</h1>
		</section>
	);
};
export default EventSummary;
