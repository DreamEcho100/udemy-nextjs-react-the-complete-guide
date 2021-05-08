import EventItem from './EventItem/index';

// import classes from './EventIist.module.css';
const classes = {
	list: 'events__EventIist', // 'list',
};

import './EventIist.scss';

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
