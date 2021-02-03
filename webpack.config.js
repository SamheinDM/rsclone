/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './js/index.js',
  module: {
    rules: [
      // { test: /\.svg$/, use: 'svg-inline-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(js)$/, use: 'babel-loader' },
      {
        test: /\.svg/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'RSClone Messanger',
      template: './template.html',
      favicon: '',
      hash: true,
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  mode: 'production',
};
