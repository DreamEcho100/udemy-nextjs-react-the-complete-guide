import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../dummy-data';

import EventList from '@/components/events/EventList/index';
import ResultsTitle from '@/components/events/ResultsTitle/index';
import Button from '@/components/ui/Button/index';
import ErrorAlert from '@/components/ui/ErrorAlert/index';

const FilteredEventsPage = () => {
	const router = useRouter();

	const filterData = router.query.slug;

	if (!filterData) {
		return <p className='center'>Loading...</p>;
	}

	const filterYear = filterData[0];
	const filterMonth = filterData[1];

	const numYear = +filterYear;
	const numMonth = +filterMonth;

	const date = new Date(numYear, numMonth - 1);

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

	const filteredEvents = getFilteredEvents({
		year: numYear,
		month: numMonth,
	});

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
