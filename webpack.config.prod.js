/* eslint-env node */

var webpackConfigBase = require( './webpack.config.base' );
var webpack = require( 'webpack' );

var config = webpackConfigBase();
config.plugins.push( new webpack.optimize.UglifyJsPlugin() );
config.plugins.push( new webpack.DefinePlugin( {
	'process.env': {
		'NODE_ENV': '"production"'
	}
} ) );

module.exports = config;
