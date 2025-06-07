const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/scripts/app.js',
  
  output: {
 path: path.resolve(__dirname, 'docs'),
   filename: 'bundle.js',
  publicPath: process.env.PUBLIC_PATH || '/',  // ← Usa variável ou '/'
  clean: true
  },
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource'
      }
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    })
  ],
  
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'public'),
        publicPath: '/'
      },
      {
        directory: path.join(__dirname, 'src/assets'),
        publicPath: '/src/assets'
      }
    ],
    port: 5500,
    open: true,
    hot: true
  },
  
  mode: 'development'
};