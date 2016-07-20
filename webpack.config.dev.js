require('dotenv').config();

var webpack = require('webpack');
var objectAssign = require('object-assign');
var defaultConfig = require('./webpack.config.js');

module.exports = objectAssign({}, defaultConfig, {
    devtool: 'cheap-module-source-map',
    devServer: {
        host: 'localhost',
        port: '8080',
        contentBase: 'www/',
        hot: true,
        inline: true,
        historyApiFallback: true
    },
    debug: true,
    progress: true,
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        'react-hot-loader/patch',
        './src/index'
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __DEVELOPMENT__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development')),
            __API_DOMAIN__: JSON.stringify(process.env.API_DOMAIN)
        })
    ]
});
