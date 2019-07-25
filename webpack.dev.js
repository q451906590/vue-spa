/* eslint-env node */
const config = require('./webpack.config.js');
const webpack = require('webpack');
const path = require('path');

config.entry = path.resolve(__dirname, 'src/index.dev.js'),

config.output = {
    publicPath: '/dist/',
    filename: 'vueSpa.js',
    path: path.resolve(__dirname, 'dist'),
},

config.plugins.push(new webpack.NamedModulesPlugin());
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.devServer = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  historyApiFallback: true,
  contentBase: './'
}

config.mode = 'development'

module.exports = config;


