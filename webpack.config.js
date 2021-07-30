const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extesions: ['.js']
  },
  module:{
    rules: {
      test: /\.js?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin([{
      inyect: true,
      template: './public/index.html',
    }])
  ]
}