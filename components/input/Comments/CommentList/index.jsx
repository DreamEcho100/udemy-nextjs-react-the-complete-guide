import classes from './CommentList.module.css';

const CommentList = ({ items = [] }) => {
	return (
		<ul className={classes.comments}>
			{items.map((item) => (
				<li key={item._id}>
					<p>{item.text}</p>
					<div>
						By <address>{item.name}</address>
					</div>
				</li>
			))}
		</ul>
	);
};

export default CommentList;
