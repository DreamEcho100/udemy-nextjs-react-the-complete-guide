import { hashPassword } from '../../../lib/auth';
import { connectDatabase, insertDocument, checkIfExist } from '../../../lib/db';

export default async (req, res) => {
	// const data = req.body;

	if (req.method !== 'POST') {
		return;
	}

	if (req.method === 'POST') {
		const { email, password } = req.body;

		if (
			!email ||
			!email.includes('@') ||
			!password ||
			password.trim().length < 7
		) {
			res.status(422).json({
				message:
					'Invalid input - password should also be at least 7 characters long.',
			});
			return;
		}

		const client = await connectDatabase({
			username: process.env.MONGODB_USERNAME,
			password: process.env.MONGODB_PASSWORD,
			clustername: process.env.MONGODB_CLUSTERNAME,
			database: process.env.MONGODB_MAZENEXTBLOG_DATABASE,
		});

		const db = client.db();

		const existingUser = await checkIfExist(db, 'users', { email });

		if (existingUser) {
			res.status(422).json({ message: 'User exists already!' });
			client.close();
			return;
		}

		const hashedPassword = await hashPassword(password);

		const result = await insertDocument(db, 'users', {
			email,
			password: hashedPassword,
		});

		client.close();

		res.status(201).json({ message: 'Created user!' });
	}
};
