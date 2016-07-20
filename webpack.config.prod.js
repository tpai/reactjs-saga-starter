require('dotenv').config();

var path = require('path');
var webpack = require('webpack');
var objectAssign = require('object-assign');
var defaultConfig = require('./webpack.config.js');

module.exports = objectAssign({}, defaultConfig, {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'www/'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
            __DEVELOPMENT__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development')),
            __API_DOMAIN__: JSON.stringify(process.env.API_DOMAIN)
        })
    ]
});
