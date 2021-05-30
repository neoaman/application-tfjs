const path = require("path");
const webpack = require("webpack");
const static_route = "/static/frontend/";

module.exports = {
  entry: "./frontend/src/index.js",
  output: {
    path: path.resolve(__dirname, "./frontend/static/frontend"),
    publicPath: static_route,
    filename: "[name].js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  devServer: {
    writeToDisk: true,
  },
};
