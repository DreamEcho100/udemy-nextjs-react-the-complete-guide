import EventItem from './EventItem';

import './EventIist.scss';

// import classes from './EventIist.module.css';
const classes = {
	list: 'events__event-list', // 'list',
};

const EventIist = ({ items = [] }) => {
	return (
		<ul className={classes.list}>
			{items.map(({ id, title, location, date, image }) => (
				<EventItem
					key={id}
					id={id}
					title={title}
					location={location}
					date={date}
					image={image}
				/>
			))}
		</ul>
	);
};

export default EventIist;
