import classes from './EventDetail.module.css';

import EventSummary from './EventSummary/EventSummary';
import EventLogistics from './EventLogistics/EventLogistics';
import EventContent from './EventContent/EventContent';

const EventDetail = ({
	event: {
		title = '',
		date = '',
		location = '',
		image = '',
		imageAlt = '',
		description = '',
	},
}) => {
	return (
		<main className={classes.main}>
			<EventSummary title={title} />
			<EventLogistics
				date={date}
				location={location}
				image={image}
				imageAlt={imageAlt}
			/>
			<EventContent>
				<p>{description}</p>
			</EventContent>
		</main>
	);
};

export default EventDetail;
