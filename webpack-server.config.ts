import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  name: 'Server',
  mode: 'development',
  entry: path.resolve(__dirname, './server/src'),
  output: {
    path: path.resolve(__dirname, './server/build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
};

export default config;
