/* eslint-env node */

var webpack = require( 'webpack' );
var path = require( 'path' );

module.exports = function () {
	return {
		entry: {
			admin: './src/scripts/admin.js',
			client: './src/scripts/client.js'
		},
		output: {
			path: path.resolve( __dirname, 'dist/scripts' ),
			filename: '[name].[hash].js'
		},
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
					query: {
						presets: ['es2015']
					}
				}
			]
		},
		plugins: [],
		resolve: {
			extensions: ['.js', '.jsx', '.json']
		},
		externals: {}
	};
};
