/* eslint-env node */

var webpackConfigBase = require( './webpack.config.base' );
var webpack = require( 'webpack' );

var config = webpackConfigBase();

var port = process.env.PORT || 8080;
var ipAddress = process.env.IP || '0.0.0.0';

config.devtool = 'source-map';
config.entry.webpackDevServer = 'webpack-dev-server/client?http://' + ipAddress + ':' + port;
config.entry.webpackHotOnly = 'webpack/hot/only-dev-server';
config.devServer = {
	historyApiFallback: true,
	inline: true,
	hot: true
};
config.plugins.push( new webpack.HotModuleReplacementPlugin() );

module.exports = config;
