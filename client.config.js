path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: './src/client',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, 'assets/js'),
        filename: 'client.js',
        publicPath: '/assets/js/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loaders: ['babel']
            }
        ]
    }
};