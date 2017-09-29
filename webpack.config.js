var path = require('path');
var webpack = require('webpack');

module.exports = {
    /*entry: [
    path.join(__dirname, 'src/app.js'),
    /!*'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:7711/',*!/
    ],*/
    entry:{
      iterator:path.join(__dirname, 'src/iterator.js'),
      collections:path.join(__dirname, 'src/collections.js'),
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].bundle.js',
		publicPath: '/',
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'src'),
                query: {
                  presets: 'es2015',
                  plugins: [ "transform-runtime" ]
                },
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()/*,
        new webpack.HotModuleReplacementPlugin()*/
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
    /*devServer:  {
      host: 'localhost',
      port: 7711,
      hot: false,
      contentBase: __dirname + '/build'
    }*/
};