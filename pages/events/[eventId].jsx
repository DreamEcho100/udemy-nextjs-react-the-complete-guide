import { getEventById, getAllEvents } from '../../helpers/api-util';

import EventDetail from '@/components/event-detail/EventDetail';

const EventDetailPage = ({ selectedEvent }) => {
	const event = selectedEvent;

	if (!event) {
		return <p>Loading...</p>;
	}

	if (event.error) {
		console.error(event.error);
		return <p>No event found!</p>;
	}

	return <EventDetail event={event} />;
};

export default EventDetailPage;

export const getStaticProps = async (context) => {
	const eventId = context.params.eventId;

	const event = await getEventById(eventId);

	return {
		props: {
			selectedEvent: event,
		},
	};
};

export const getStaticPaths = async () => {
	const events = await getAllEvents();

	const paths = events.map((event) => ({ params: { eventId: event.id } }));

	return {
		paths: paths,
		fallback: false,
	};
};
