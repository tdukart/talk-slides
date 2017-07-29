/* eslint-env node */

var webpackConfigBase = require( './webpack.config.base' );
var webpack = require( 'webpack' );
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );

var config = webpackConfigBase();
config.plugins.push( new webpack.optimize.UglifyJsPlugin() );
config.plugins.push( new HtmlWebpackPlugin( {
	template: './src/html-templates/prod.ejs',
	title: 'Directorate 51'
} ) );
config.plugins.push( new webpack.DefinePlugin( {
	'process.env': {
		'NODE_ENV': '"production"'
	}
} ) );

config.externals = {
	'jquery': 'jQuery',
	'react': 'React',
	'react-bootstrap':'ReactBootstrap',
	'react-dom': 'ReactDOM',
	'react-router': 'ReactRouter',
	'react-redux': 'ReactRedux',
	'redux': 'Redux',
	'webfontloader': 'WebFont'
};

module.exports = config;
