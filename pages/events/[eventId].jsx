import { useRouter } from 'next/router';

import { getEventById } from '@/dummy-data';

import EventDetail from '@/components/event-detail/EventDetail';

const EventDetailPage = () => {
	const router = useRouter();

	const eventId = router.query.eventId;
	const event = getEventById(eventId);

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
