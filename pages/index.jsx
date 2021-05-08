import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/EventIist';

const index = () => {
	const featuredEvents = getFeaturedEvents();

	return (
		<div>
			<EventList items={featuredEvents} />
		</div>
	);
};

export default index;
