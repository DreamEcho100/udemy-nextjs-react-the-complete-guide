import EventItem from './EventItem';

const EventIist = ({ items = [] }) => {
	return (
		<ul>
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
