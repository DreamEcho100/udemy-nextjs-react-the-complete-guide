import { getFeaturedEvents } from '../helpers/api-util';

import EventList from '@/components/events/EventList/index';

const index = ({ events }) => {
	return (
		<>
			<EventList items={events} />
		</>
	);
};

export default index;

export const getStaticProps = async () => {
	const featuredEvents = await getFeaturedEvents();

	return {
		props: {
			events: featuredEvents,
		},
	};
};
