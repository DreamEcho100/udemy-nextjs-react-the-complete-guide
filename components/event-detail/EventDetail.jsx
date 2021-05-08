// import classes from './EventDetail.module.css';
const classes = {
	content: 'event-detail__EventDetail', // content
};

import './EventDetail.scss';

import EventSummary from './EventSummary/index';
import EventLogistics from './EventLogistics/index';
import EventContent from './EventContent/index';

const EventDetail = ({
	event: {
		title = '',
		date = '',
		address = '',
		image = '',
		imageAlt = '',
		description = '',
	},
}) => (
	<main>
		<EventSummary title={title} />
		<EventLogistics
			date={date}
			address={address}
			image={image}
			imageAlt={imageAlt}
		/>
		<EventContent>
			<p>{description}</p>
		</EventContent>
	</main>
);

export default EventDetail;
