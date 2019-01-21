const path = require('path');
 
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
 
module.exports = {
    entry: {
        app: './app.js'
    },
    module: {
        rules: [
          {
            test: /\.pug$/,
            use: [
              "raw-loader",
              "pug-html-loader"
            ]
          }
        ],
        noParse: function (content) {
            return /express/.test(content);
        }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'views/index.pug',
        filename: 'index.html'
      })
    ],
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};