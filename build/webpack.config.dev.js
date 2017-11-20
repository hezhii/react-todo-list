const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
  entry: [
    'react-hot-loader/patch',
    path.join(appDirectory, 'src/index.js')
  ],
  output: {
    path: path.join(appDirectory, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader?cacheDirectory=true'],
      include: path.join(appDirectory, 'src')
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(appDirectory, 'public/index.html')
    })
  ],
  devServer: {
    contentBase: path.join(appDirectory, 'dist'),
    historyApiFallback: true,
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      components: path.join(appDirectory, 'src/components'),
    }
  }
};
