var path = require('path');
var webpack = require('webpack');

module.exports = {
 entry: './src/index.js',
 output: {
     path: path.resolve(__dirname, 'build'),
     filename: 'main.bundle.js'
 },
 module: {
     loaders: [
         {
             test: /\.js$/,
             loader: 'babel-loader',
             query: {
                 presets: ['env', 'es2015', 'react', 'stage-1']
             }
         }
     ]
 },
 resolve: {
   modules: ["web_modules", "node_modules", path.resolve(__dirname, 'src')],
   alias: {
     colors: 'constants/colors'
   }
 },
 stats: {
     colors: true
 },
 devtool: 'source-map'
};
