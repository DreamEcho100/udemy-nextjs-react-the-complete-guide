import { connectDatabase, insertDocument } from '../../../lib/db-util';

const handler = async (req, res) => {
	if (req.method === 'GET') {
		res.status(200).json({});
	}
	if (req.method === 'POST') {
		const { email, name, message } = req.body;
		let client;

		if (
			!email ||
			!email.includes('@') ||
			!name ||
			name.trim() === '' ||
			!message ||
			message.trim() === ''
		) {
			res.status(422).json({ message: 'Invalid input.' });
			return;
		}

		// Store it in a database
		const newMessage = {
			email,
			name,
			message,
			createdAt: new Date(),
		};

		try {
			client = await connectDatabase({
				username: process.env.MONGODB_USERNAME,
				password: process.env.MONGODB_PASSWORD,
				clustername: process.env.MONGODB_CLUSTERNAME,
				database: process.env.MONGODB_MAZENEXTBLOG_DATABASE,
			});
		} catch (error) {
			res.status(500).json({
				message: error.message || 'Connecting to the database failed!',
			});
			return;
		}

		let db = client.db(process.env.MONGODB_USERNAME);

		try {
			const result = await insertDocument(db, 'messages', newMessage);
			newMessage.id = result.insertedId;

			res
				.status(201)
				.json({ message: 'Successfully stored message!', message: newMessage });
		} catch (error) {
			res.status(500).json({ message: 'Storing message failed!' });
		}
		client.close();
		return;
	}
};

export default handler;
