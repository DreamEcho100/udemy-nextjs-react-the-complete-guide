// import classes from './EventContent.module.css';
const classes = {
	content: 'event-detail__EventDetail__EventContent', // content
};

import './EventContent.scss';

const EventContent = ({ children }) => {
	return <section className={classes.content}>{children}</section>;
};
export default EventContent;
