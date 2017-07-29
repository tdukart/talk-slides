/* eslint-env node */

var webpackConfigBase = require( './webpack.config.base' );

var config = webpackConfigBase();

config.devtool = 'source-map';

module.exports = config;
