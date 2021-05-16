import {
	connectDatabase,
	checkIfExist,
	insertDocument,
} from '../../../helpers/db-util';

const handler = async (req, res) => {
	if (req.method === 'POST') {
		const userEmail = req.body.email;

		if (!userEmail || !userEmail.includes('@')) {
			res.status(422).json({ message: 'Invalid email address.' });
			return;
		}

		let client;
		try {
			client = await connectDatabase();
		} catch (error) {
			res.status(500).json({ message: 'Connecting to the database failed!' });
			return;
		}

		const emailExist = await checkIfExist(client, 'newsletter', {
			email: userEmail,
		});

		if (!emailExist) {
			try {
				await insertDocument(client, 'newsletter', {
					email: userEmail,
					addedAt: new Date(),
				});

				res.status(201).json({ message: 'Signed up!' });
			} catch (error) {
				res.status(500).json({ message: 'Inserting data failed!' });
			}
		} else {
			res.status(400).json({ message: 'Already signed up!' });
		}

		client.close();
	}
};

export default handler;
