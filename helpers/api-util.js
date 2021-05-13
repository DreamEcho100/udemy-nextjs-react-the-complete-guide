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

export const getFilteredEvents = async (dataFilter) => {
	const { year, month } = dataFilter;

	const filteredEvents = await getAllEvents().then((data) => {
		return data.filter((event) => {
			const eventDate = new Date(event.date);
			return (
				eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
			);
		});
	});

	return filteredEvents;
};
