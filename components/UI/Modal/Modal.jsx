import classes from './Modal.module.css';

const Modal = ({ children, click, className }) => {
	const findByKey = (name) => {
		return children.filter((child) => child.key === name);
	};

	const closeModal = (event) => {
		event.stopPropagation();

		if (event.target.classList.contains('modal-close')) {
			return click();
		}
	};

	return (
		<div
			className={
				className
					? `${className} ${classes.modal_mask} ${classes.modal_close} modal-close`
					: `${classes.modal_mask} ${classes.modal_close} modal-close`
			}
			onClick={closeModal}
		>
			<div className={classes.modal_wrapper}>
				<div className={classes.modal_container}>
					<div className={classes.modal_header}>{findByKey('header')}</div>
					<div className={classes.modal_body}>{findByKey('body')}</div>
					<div className={classes.modal_footer}>
						<div>
							<button
								className={`${classes.modal_close} ${classes.btn} modal-close`}
								onClick={closeModal}
							>
								Close
							</button>
						</div>
						{findByKey('footer')}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
