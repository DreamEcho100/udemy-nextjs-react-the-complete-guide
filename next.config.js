const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.resolve.alias['@'] = path.resolve(__dirname);
		config.plugins.push(new Dotenv({ silent: true }));

		// if (config.mode === 'production') {
		// 	if (Array.isArray(config.optimization.minimizer)) {
		// 		config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
		// 	}
		// }
		return config;
	},
	env: {
		// BASE_URL:
	},
};
