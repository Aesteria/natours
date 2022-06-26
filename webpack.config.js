const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    assetModuleFilename: "img/[hash][ext][query]"
  },

  module: {
    rules: [
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
        type: 'asset/resource'
      }
    ]
  },

  plugins: [new MiniCssExtractPlugin()],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    }
  }
};