import { getFeaturedEvents } from '@/dummy-data';
// import { getAllEvents } from '../helpers/api-util';

import EventList from '@/components/events/EventList/index';

const index = ({ events }) => {
	return (
		<div>
			<EventList items={events} />
		</div>
	);
};

export default index;

export const getStaticProps = async () => {
	const featuredEvents = getFeaturedEvents();

	return {
		props: {
			events: featuredEvents,
		},
	};
};
