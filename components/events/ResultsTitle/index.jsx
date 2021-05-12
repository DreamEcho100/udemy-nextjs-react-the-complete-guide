import Button from '@/components/ui/Button';
import classes from './ResultsTitle.module.css';

const ResultsTitle = ({ date }) => {
	const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
		month: 'long',
		year: 'numeric',
	});

	return (
		<section className={classes.title}>
			<h1>Events in {humanReadableDate}</h1>
			<Button link='/events'>Show all events</Button>
		</section>
	);
};

export default ResultsTitle;
