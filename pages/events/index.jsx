import { getAllEvents } from '../../dummy-data';

import EventList from '@/components/events/EventList/index';
import EventsSearch from '@/components/events/EventsSearch/index';

const AllEventsPage = () => {
	const events = getAllEvents();

	return (
		<div>
			<EventsSearch />
			<EventList items={events} />
		</div>
	);
};

export default AllEventsPage;
