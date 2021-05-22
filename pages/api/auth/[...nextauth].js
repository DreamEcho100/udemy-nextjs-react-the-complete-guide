import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import { verifyPassword } from '../../../lib/auth';
import { connectDatabase } from '../../../lib/db';

export default NextAuth({
	session: {
		jwt: true,
	},
	providers: [
		Providers.Credentials({
			async authorize(credentials) {
				const client = await connectDatabase({
					username: process.env.MONGODB_USERNAME,
					password: process.env.MONGODB_PASSWORD,
					clustername: process.env.MONGODB_CLUSTERNAME,
					database: process.env.MONGODB_MAZENEXTBLOG_DATABASE,
				});

				const usersCollection = client.db().collection('users');

				const user = await usersCollection.findOne({
					email: credentials.email,
				});

				if (!user) {
					client.close();
					throw new Error('No user found!');
				}

				const isValid = await verifyPassword(
					credentials.password,
					user.password
				);

				if (!isValid) {
					client.close();
					throw new Error('Could not log you in! Wrong password.');
				}

				client.close();

				return { email: user.email };
			},
		}),
	],
});
