const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const appDirectory = fs.realpathSync(process.cwd());

const postcssOpts = {
  // Necessary for external CSS imports to work
  // https://github.com/facebookincubator/create-react-app/issues/2677
  ident: 'postcss',
  plugins: () => [
    require('postcss-flexbugs-fixes'),
    autoprefixer({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
      flexbox: 'no-2009',
    }),
  ],
};

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
    }, {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: postcssOpts
        },
        'less-loader']
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: postcssOpts
        }]
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
