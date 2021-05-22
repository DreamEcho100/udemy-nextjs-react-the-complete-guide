const path = require('path');
const Dotenv = require('dotenv-webpack');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
	let env = {};
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		env = {
			MONGODB_USERNAME: process.env.MONGODB_DEVELOPMENT_USERNAME, // 'maximilian',
			MONGODB_PASSWORD: process.env.MONGODB_DEVELOPMENT_PASSWORD, // '2YkcXq43KyPk0vqp',
			MONGODB_CLUSTERNAME: process.env.MONGODB_DEVELOPMENT_CLUSTERNAME, // 'cluster0',
			MONGODB_MAZENEXTBLOG_DATABASE: process.env.MONGODB_DEVELOPMENT_DATABASE, // 'my-site-dev',
			// NEXTAUTH_URL: 'http://localhost:3000/api/v1/auth',
		};
	} else {
		env = {
			MONGODB_USERNAME: process.env.MONGODB_PRODUCTION_USERNAME,
			MONGODB_PASSWORD: process.env.MONGODB_PRODUCTION_PASSWORD,
			MONGODB_CLUSTERNAME: process.env.MONGODB_PRODUCTION_CLUSTERNAME,
			MONGODB_MAZENEXTBLOG_DATABASE: process.env.MONGODB_PRODUCTION_DATABASE,
		};
	}

	return {
		sassOptions: {
			includePaths: [path.join(__dirname, 'styles')],
		},
		webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
			config.resolve.alias['@'] = path.resolve(__dirname);
			config.plugins.push(new Dotenv({ silent: true }));

			return config;
		},
		env,
	};
};
