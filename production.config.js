/**
 * Created by rouven on 11.04.17.
 */

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
        library: 'reactLoading',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                drop_console: true
            },
            output: {
                comments: false
            }
        })
    ],
    externals: {
        "prop-types": "prop-types",
        "react": "react",
        "react-dom": "react-dom",
        "react-symbol": "react-symbol"
    }
};
