const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 2,
                    sourceMap: true
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }
        ]
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      watch: true,
      
    },
    compress: true,
    open: true,
    port: 8080,
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'menu.html',
      template: './src/menu.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/img", to: "img" }
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/mock", to: "mock" }
      ],
    }),
  ]
}