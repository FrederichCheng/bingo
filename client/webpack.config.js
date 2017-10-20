const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// input dir
const APP_DIR = path.resolve(__dirname, './');

// output dir
const BUILD_DIR = path.resolve(__dirname, '../public/assets/dist');

const config = {
  entry: {
    bundle: ['babel-polyfill', APP_DIR + '/src/app.js'],
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
    alias: {
    },
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: APP_DIR + '/node_modules',
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react',
          ],
        },
      },
      /* for require('*.css') */
      {
        test: /\.css$/,
        include: APP_DIR,
        loader: 'style-loader!css-loader',
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],
};

module.exports = config;
