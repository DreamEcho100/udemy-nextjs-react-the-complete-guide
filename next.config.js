const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// module.exports = withCss(withSass());

const path = require('path');
const Dotenv = require('dotenv-webpack');

// const prod = process.env.NODE_ENV === 'production';

module.exports = withCss(
	withSass({
		webpack: (config) => {
			config.resolve.alias['@'] = path.resolve(__dirname);
			config.plugins.push(new Dotenv({ silent: true }));
			// config.module.rules.push({
			// 	test: /\.css$/i,
			// 	use: ['style-loader', 'css-loader'],
			// });
			config.module.rules.push({
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			});
			// config.module.rules.push({
			// 	test: /\.css$/,
			// 	use: [
			// 		'style-loader',
			// 		{
			// 			loader: 'css-loader',
			// 			options: {
			// 				minimize: true,
			// 				camelCase: 'dashes',
			// 				modules: true,
			// 				localIdentName: '[name]__[local]___[hash:base64:5]',
			// 			},
			// 		},
			// 	],
			// });
			if (config.mode === 'production') {
				if (Array.isArray(config.optimization.minimizer)) {
					config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
				}
			}
			return config;
		},
		env: {
			// BASE_URL:
			// 	process.env.NODE_ENV === 'production'
			// 		? process.env.BASE_URL_PRODUCTION
			// 		: process.env.BASE_URL_DEVOLOPMENT,
			// NAMESPACE:
			// 	process.env.NODE_ENV === 'production'
			// 		? process.env.NAMESPACE_PROD
			// 		: process.env.NAMESPACE_DEV,
			// AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
			// AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
		},
	})
);
