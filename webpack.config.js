var path = require('path');
var precss = require('precss');
var cssnext = require('postcss-cssnext');
var postcssImport = require('postcss-import')({
    path: path.resolve(__dirname, 'src')
});

module.exports = {
    module: {
        preLoaders: [
            {
                test: /\.(js|jsx)$/,
                loader: "eslint",
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss"
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    postcss: function(webpack) {
        return [postcssImport, precss, cssnext];
    },
    resolve: {
        root: [ path.resolve("./src") ],
        extensions: ['', '.js', '.jsx', '.css']
    }
};
