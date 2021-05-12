import { useRouter } from 'next/router';

import { getAllEvents } from '@/dummy-data';

import EventsSearch from '@/components/events/EventsSearch/index';
import EventList from '@/components/events/EventList/index';

const AllEventsPage = () => {
	const router = useRouter();
	const events = getAllEvents();

	const findEventsHandler = (year, month) => {
		const fullPath = `/events/${year}/${month}`;

		router.push(fullPath);
	};

	return (
		<div>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</div>
	);
};

export default AllEventsPage;
