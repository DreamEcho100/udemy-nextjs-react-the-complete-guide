// import classes from './ErrorAlert.module.css';
const classes = {
	alert: 'ui__ErrorAlert', // 'alert',
};
import './ErrorAlert.scss';

const ErrorAlert = ({ children }) => {
	return <div className={classes.alert}>{children}</div>;
};

export default ErrorAlert;
