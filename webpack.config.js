const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

let mode = 'development';
let target = 'web';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist'
}

module.exports = {
  mode,
  devtool: "source-map",
  target,

  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: "img/[hash][ext][query]"
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: { loader: 'html-loader' }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'resolve-url-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp4|webm)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[hash][ext]'
        },
        exclude: /fonts/
      },
      {
        test: /\.(eot|svg|ttf|woff)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext]'
        },
        exclude: /img/
      }
    ]
  },

  plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
    template: "./src/index.html"
  })],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    }
  }
};