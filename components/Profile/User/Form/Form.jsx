import classes from './Form.module.css';

const Form = () => {
	return (
		<form className={classes.form}>
			<div className={classes.control}>
				<label htmlFor='new-password'>New Password</label>
				<input type='password' id='new-password' />
			</div>
			<div className={classes.control}>
				<label htmlFor='old-password'>Old Password</label>
				<input type='password' id='old-password' />
			</div>
			<div className={classes.action}>
				<button>Change Password</button>
			</div>
		</form>
	);
};

export default Form;
