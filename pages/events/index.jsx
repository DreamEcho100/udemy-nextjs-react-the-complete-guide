import { useRouter } from 'next/router';
import Head from 'next/head';

import { getAllEvents } from '@/helpers/api-util';

import EventsSearch from '@/components/events/EventsSearch/index';
import EventList from '@/components/events/EventList/index';

const AllEventsPage = ({ events }) => {
	const router = useRouter();

	const findEventsHandler = (year, month) => {
		const fullPath = `/events/${year}/${month}`;

		router.push(fullPath);
	};

	return (
		<>
			<Head>
				<title>All my events</title>
			</Head>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</>
	);
};

export default AllEventsPage;

export const getStaticProps = async () => {
	const events = await getAllEvents();

	return {
		props: {
			events,
		},
		revalidate: 1800,
	};
};
