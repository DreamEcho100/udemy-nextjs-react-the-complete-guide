import classes from './ErrorAlert.module.css';

const ErrorAlert = ({ children }) => {
	return <div className={classes.alert}>{children}</div>;
};

export default ErrorAlert;
