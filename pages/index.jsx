import { getFeaturedEvents } from '@/dummy-data';
import EventList from '@/components/events/EventList/index';

const index = () => {
	const featuredEvents = getFeaturedEvents();

	return (
		<div>
			<EventList items={featuredEvents} />
		</div>
	);
};

export default index;
