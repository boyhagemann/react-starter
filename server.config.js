path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: './src/server',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    target: 'node',
    output: {
        filename: 'server.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loaders: ['babel']
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
};