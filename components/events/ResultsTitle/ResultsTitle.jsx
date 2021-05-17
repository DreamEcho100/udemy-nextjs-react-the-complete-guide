import { dateToHumanReadableDate } from '@/helpers/func';

import Button from '@/components/ui/Button/Button';
import classes from './ResultsTitle.module.css';

const ResultsTitle = ({ date }) => {
	const humanReadableDate = dateToHumanReadableDate(date, {
		dayFormat: 'none',
	});

	return (
		<section className={classes.title}>
			<h1>Events in {humanReadableDate}</h1>
			<Button className={classes.btn} link='/events'>
				Show all events
			</Button>
		</section>
	);
};

export default ResultsTitle;
