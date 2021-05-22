import { MongoClient } from 'mongodb';

export const connectDatabase = async (connString) => {
	let connectionString;

	if (
		typeof connString === 'object' &&
		connString &&
		connString.username &&
		connString.password &&
		connString.clustername &&
		connString.database
	) {
		const { username, password, clustername, database } = connString;

		connectionString =
			process.env.NODE_ENV === 'production'
				? `mongodb+srv://${username}:${password}@${clustername}.ntrwp.mongodb.net/${database}?retryWrites=true&w=majority`
				: `mongodb://${username}:${password}@cluster0-shard-00-00.mwwbx.mongodb.net:27017,cluster0-shard-00-01.mwwbx.mongodb.net:27017,cluster0-shard-00-02.mwwbx.mongodb.net:27017/${database}?ssl=true&replicaSet=atlas-rw6w7k-shard-0&authSource=admin&retryWrites=true&w=majority`;
	} else if (typeof connString === 'string') {
		connectionString = connString;
	}

	const client = await MongoClient.connect(connectionString, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	return client;
};

export const checkIfExist = async (db, collection, target) => {
	const emailExist = await db
		.collection(collection)
		.findOne(target)
		.then((response) => response);

	return emailExist && true;
};

export const insertDocument = async (db, collection, document) => {
	const result = await db.collection(collection).insertOne(document);

	return result;
};

export const getAllDocuments = async (db, collection, findBy, sort) => {
	const documents =
		findBy || findBy !== 'all'
			? await db.collection(collection).find(findBy).sort(sort).toArray()
			: await db.collection(collection).find().sort(sort).toArray();

	return documents;
};
