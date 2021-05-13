import { getEventById, getFeaturedEvents } from '@/helpers/api-util';

import EventDetail from '@/components/event-detail/EventDetail';
import ErrorAlert from '@/components/ui/ErrorAlert/index';

const EventDetailPage = ({ selectedEvent }) => {
	const event = selectedEvent;

	if (!event) {
		return (
			<div className='center'>
				<p>Loading...</p>
			</div>
		);
	}

	if (event.error) {
		console.error(event.error);
		return (
			<ErrorAlert>
				<p>No event found!</p>
			</ErrorAlert>
		);
	}

	return <EventDetail event={event} />;
};

export default EventDetailPage;

export const getStaticProps = async (context) => {
	const eventId = context.params.eventId;

	const event = await getEventById(eventId);

	if (!event) {
		return {
			props: {
				selectedEvent: {
					error: 'No event found',
				},
			},
		};
	}

	return {
		props: {
			selectedEvent: event,
		},
		revalidate: 30,
	};
};

export const getStaticPaths = async () => {
	const events = await getFeaturedEvents();

	const paths = events.map((event) => ({ params: { eventId: event.id } }));

	return {
		paths: paths,
		// fallback: false,
		fallback: 'blocking',
	};
};
