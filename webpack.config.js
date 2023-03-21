const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: '/my-agora-states-client/src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),
    clean: true,
  },
  devServer: {
    static: './dist',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        '/my-agora-states-client/public',
        'index.html'
      ),
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
};
