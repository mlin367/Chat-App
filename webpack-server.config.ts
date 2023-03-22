import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

const config: webpack.Configuration = {
  name: 'Server',
  mode: 'development',
  entry: path.resolve(__dirname, './server/src'),
  output: {
    path: path.resolve(__dirname, './server/build'),
    filename: 'bundle.js'
  },
  node: { __dirname: false },
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
  externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()],
};

export default config;
