const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: {
    app: './src/main.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@container': path.join(__dirname, 'src/components/container'),
      '@presentational': path.join(__dirname, 'src/components/presentational'),
      '@src': path.join(__dirname, 'src'),
      '@assets': path.join(__dirname, 'src/assets'),
      '@lib': path.join(__dirname, 'src/lib'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-inline-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  devServer: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:8080',
      '/auth': 'htpp://localhost:8080',
    },
  },
};
