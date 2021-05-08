import EventItem from './EventItem';

import './EventIist.scss';

// import classes from './EventIist.module.css';
const classes = {
	list: 'list',
};

const EventIist = ({ items = [] }) => {
	return (
		<ul className={`events__event-list ${classes.list}`}>
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
