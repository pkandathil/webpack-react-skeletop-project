var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname + "/app",
  entry: {
    main: __dirname + '/app/main.js'
  },
  output: {
      filename: '[name].js',
      path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader?sourceMap', 'css-loader?sourceMap', 'sass-loader?sourceMap']
      },
      {
        test : /\.jsx?/,
        loader : ['babel-loader?presets[]=es2015,presets[]=react']
      }
    ]
  }
};

