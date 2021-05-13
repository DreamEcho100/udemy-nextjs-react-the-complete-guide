export const getAllEvents = async () => {
	const events = [];

	await fetch(
		'https://udemy-nextjs-course-full-guide-default-rtdb.firebaseio.com/events.json'
	)
		.then((response) => response.json())
		.then((data) => {
			let key;
			for (key in data) {
				events.push({
					id: key,
					...data[key],
				});
			}
		})
		.catch((error) => {
			console.error(error);
			return;
		});

	return events;
};

export const getFeaturedEvents = async () => {
	return await getAllEvents().then((events) =>
		events.filter((event) => event.isFeatured)
	);
};

export const getEventById = async (id) => {
	return await getAllEvents().then((events) =>
		events.find((event) => event.id === id)
	);
};
