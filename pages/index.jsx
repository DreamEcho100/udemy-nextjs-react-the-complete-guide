import { getFeaturedEvents } from '../helpers/api-util';

import EventList from '@/components/events/EventList/index';
import NewsletterRegistration from '@/components/input/NewsletteRegisteration/index';

const index = ({ events }) => {
	return (
		<>
			<NewsletterRegistration />
			<EventList items={events} />
		</>
	);
};

export const getStaticProps = async () => {
	const featuredEvents = await getFeaturedEvents();

	return {
		props: {
			events: featuredEvents,
		},
		revalidate: 1800,
	};
};

export default index;
