import {
	connectDatabase,
	insertDocument,
	getAllDocuments,
} from '../../../../helpers/db-util';

const handler = async (req, res) => {
	const { eventId } = req.query;

	let client;
	try {
		client = await connectDatabase();
	} catch (error) {
		res.status(500).json({ message: 'Connecting to the database failed!' });
		return;
	}

	if (req.method === 'POST') {
		const { email, name, text } = req.body;

		if (
			!email.includes('@') ||
			!name ||
			name.trim() === '' ||
			!text ||
			text.trim() === ''
		) {
			res.status(422).json({ message: 'Invalid input.' });
			return;
		}

		const newComment = {
			email,
			name,
			text,
			eventId,
			createdAt: new Date(),
			createdAt: new Date(),
		};

		let result;
		try {
			result = await insertDocument(client, 'comments', newComment);

			newComment.id = result.insertedId;

			res.status(201).json({ message: 'Added comment.', comment: newComment });
		} catch (error) {
			res.status(500).json({ message: 'Inserting comment failed!' });
		}
	}

	if (req.method === 'GET') {
		let documents;
		try {
			documents = await getAllDocuments(client, 'comments', { id: -1 });
		} catch (error) {
			res.status(500).json({ message: 'Getting comments failed.' });
		}

		res.status(200).json({ comments: documents });
	}

	client.close();
};

export default handler;
