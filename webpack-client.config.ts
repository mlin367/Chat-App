import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  name: 'Client',
  mode: 'development',
  entry: path.resolve(__dirname, './client'),
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
  },
};

export default config;
