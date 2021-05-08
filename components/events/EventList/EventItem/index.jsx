import Link from 'next/link';

// import classes from './EventItem.module.css';
const classes = {
	item: 'events__EventIist__EventItem', // 'item',
	img: 'img',
	content: 'content',
	summary: 'summary',
	date: 'date',
	address: 'address',
	actions: 'actions',
	icon: 'icon',
};

import './EventItem.scss';

import Button from '@/components/ui/Button';
import DateIcon from '@/components/icons/DateIcon';
import AddressIcon from '@/components/icons/AddressIcon';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';

const EventItem = ({ id, title, location, date, image }) => {
	const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	const formattedAddres = location.replace(', ', '\n');
	const exploreLink = `/events/${id}`;

	return (
		<li className={classes.item}>
			{/* <img src={`/${image}`} alt={title} /> */}
			<div
				className={classes.img}
				style={{ backgroundImage: `url(${image})` }}
			></div>
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>{title}</h2>
					<div className={classes.date}>
						<DateIcon />
						<time>{humanReadableDate}</time>
					</div>
					<div className={classes.address}>
						<AddressIcon />
						<address>{formattedAddres}</address>
					</div>
					<div className={classes.actions}>
						<Button link={exploreLink}>
							<span>Explore Event</span>
							<span className={classes.icon}>
								<ArrowRightIcon />
							</span>
						</Button>
					</div>
				</div>
			</div>
		</li>
	);
};

export default EventItem;
