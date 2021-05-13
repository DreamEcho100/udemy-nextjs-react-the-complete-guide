import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import { getFilteredEvents } from '../../helpers/api-util';

import EventList from '@/components/events/EventList/index';
import ResultsTitle from '@/components/events/ResultsTitle/index';
import Button from '@/components/ui/Button/index';
import ErrorAlert from '@/components/ui/ErrorAlert/index';

const FilteredEventsPage = (/*{ events, date, hasError }*/) => {
	const router = useRouter();
	const [loadedEvents, setLoadedEvents] = useState();

	const { data, error } = useSWR(
		'https://udemy-nextjs-course-full-guide-default-rtdb.firebaseio.com/events.json'
	);

	useEffect(() => {
		if (!data) return;

		const events = [];
		let key;

		for (key in data) {
			events.push({
				id: key,
				key,
				...data[key],
			});
		}

		setLoadedEvents(events);
	}, [data]);

	if (!loadedEvents) {
		return <p className='center'>Loading...</p>;
	}

	const filterData = router.query.slug;

	const filteredYear = filterData[0];
	const filteredMonth = filterData[1];

	const numYear = +filteredYear;
	const numMonth = +filteredMonth;

	if (
		isNaN(numYear) ||
		isNaN(numMonth) ||
		numYear > 2030 ||
		numYear < 2021 ||
		numMonth < 1 ||
		numMonth > 12
	) {
		return (
			<>
				<ErrorAlert>
					<p>Invalid filter. Please adjust your values!</p>
				</ErrorAlert>
				<div className='center'>
					<Button link='/events'>Show All Events</Button>
				</div>
			</>
		);
	}

	const filteredEvents = loadedEvents.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === numYear &&
			eventDate.getMonth() === numMonth - 1
		);
	});

	const date = new Date(numYear, numMonth - 1);

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<>
				<ErrorAlert>
					<p>No events found for the chosen filter!</p>
				</ErrorAlert>
				<div className='center'>
					<Button link='/events'>Show All Events</Button>
				</div>
			</>
		);
	}

	return (
		<>
			<ResultsTitle date={date} />
			<EventList items={filteredEvents} />
		</>
	);
};

export default FilteredEventsPage;

// export const getServerSideProps = async (context) => {
// 	const { params } = context;

// 	const filterData = params.slug;

// 	const filterYear = filterData[0];
// 	const filterMonth = filterData[1];

// 	const numYear = +filterYear;
// 	const numMonth = +filterMonth;

// 	if (
// 		isNaN(numYear) ||
// 		isNaN(numMonth) ||
// 		numYear > 2030 ||
// 		numYear < 2021 ||
// 		numMonth < 1 ||
// 		numMonth > 12
// 	) {
// 		return {
// 			props: {
// 				hasError: true,
// 			},
// 		};
// 	}

// 	const filteredEvents = await getFilteredEvents({
// 		year: numYear,
// 		month: numMonth,
// 	});

// 	return {
// 		props: {
// 			events: filteredEvents,
// 			date: {
// 				year: numYear,
// 				month: numMonth,
// 			},
// 		},
// 	};
// };
