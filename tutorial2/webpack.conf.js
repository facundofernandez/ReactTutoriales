
'use strict';

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let entry = "./src/index.js";
let output = "main.js";

const config = {
    mode: 'development',
  // Archivo/s de entrada a interactuar
  entry: entry,
  // Archivo de Salida
  output: {
    filename: output,
    path: path.resolve(__dirname, 'dist/js')
  },
  // Modulos para los loader
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // fallback to style-loader in development
          MiniCssExtractPlugin.loader,
          "css-loader",
          //"postcss-loader",
          "sass-loader"
        ]
      },
      {
        "test": /\.(js|jsx)$/,
        "exclude": /node_modules/,
        "use": {
            "loader": "babel-loader",
            "options": {
                "presets": [
                    "env",
                    "react"
                ]
            }
        }
    }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/[name].css',
      chunkFilename: '../css/[id].css',
    })
  ]
};

module.exports = config;
