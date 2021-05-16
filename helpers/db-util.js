import { MongoClient } from 'mongodb';

export const connectDatabase = async () => {
	const client = await MongoClient.connect(
		process.env.MONGODB_NEWSLETTER_STRING_CONNECTION,
		{ useNewUrlParser: true, useUnifiedTopology: true }
	);

	return client;
};

export const checkIfExist = async (client, collection, target) => {
	const db = client.db();

	const emailExist = await db
		.collection(collection)
		.findOne(target)
		.then((response) => response);

	return emailExist && true;
};

export const insertDocument = async (client, collection, document) => {
	const db = client.db();

	const result = await db.collection(collection).insertOne(document);

	return result;
};

export const getAllDocuments = async (client, collection, findBy, sort) => {
	const db = client.db();

	const documents = findBy || findBy !== 'all' ? await db.collection(collection).find(findBy).sort(sort).toArray() :
	await db.collection(collection).find().sort(sort).toArray();

	return documents;
};
