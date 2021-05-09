// import classes from './EventLogistics.module.css'
const classes = {
	logistics: 'event-detail__EventDetail__EventLogistics', // 'logistics',
	image: 'image',
	list: 'list',
};
import './EventLogistics.scss';

import AddressIcon from '@/components/icons/AddressIcon';
import DateIcon from '@/components/icons/DateIcon';
import LogisticsItem from './LogisticsItem/index';

const EventLogistics = ({ date, location, image, imageAlt }) => {
	const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	const locationText = location.replace(', ', '\n');

	return (
		<section className={classes.logistics}>
			<div className={classes.image}>
				<img src={`/${image}`} alt={imageAlt} />
			</div>
			<ul className={classes.list}>
				<LogisticsItem icon={DateIcon}>
					<time>{humanReadableDate}</time>
				</LogisticsItem>
				<LogisticsItem icon={AddressIcon}>
					<address>{locationText}</address>
				</LogisticsItem>
			</ul>
		</section>
	);
};
export default EventLogistics;
