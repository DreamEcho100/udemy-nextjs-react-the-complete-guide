import { getFeaturedEvents } from '@/dummy-data';
import EventList from '@/components/events/EventIist/index';

const index = () => {
	const featuredEvents = getFeaturedEvents();

	return (
		<div>
			<EventList items={featuredEvents} />
		</div>
	);
};

export default index;
