import Image from 'next/image';

import classes from './EventLogistics.module.css';

import { dateToHumanReadableDate } from '@/helpers/func';

import AddressIcon from '@/components/icons/AddressIcon';
import DateIcon from '@/components/icons/DateIcon';
import LogisticsItem from './LogisticsItem/index';

const EventLogistics = ({ date, location, image, imageAlt }) => {
	// const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
	// 	day: 'numeric',
	// 	month: 'long',
	// 	year: 'numeric',
	// });
	const humanReadableDate = dateToHumanReadableDate(date);
	const locationText = location.replace(', ', '\n');

	return (
		<section className={classes.logistics}>
			<div className={classes.image}>
				{/* <img src={`/${image}`} alt={imageAlt} /> */}
				<Image src={`/${image}`} alt={imageAlt} width={400} height={400} />
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
