/* eslint-env node */
const config = require('./webpack.config.js');
const webpack = require('webpack');
const path = require('path');

config.entry = path.resolve(__dirname, 'src/index.js')
config.output = {
  filename: 'vueSpa.js',
  library: 'vueSpa',
  libraryTarget: 'amd',
  path: path.resolve(__dirname, 'build/vueSpa'),
},

config.plugins.push(new webpack.NamedModulesPlugin());
config.plugins.push(new webpack.HotModuleReplacementPlugin());


config.mode = 'production'

module.exports = config;