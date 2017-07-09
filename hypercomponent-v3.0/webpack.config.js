'use strict';
var path = require('path')
var webpack = require('webpack')
var extensions = [
    '.js', '.es6.js'
];

module.exports = [{
    entry: {
        main: './src/main.es6.js',
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js'
    },
    resolve: {
        extensions: extensions,
        modules: [
            __dirname,
            path.resolve(__dirname, "src"),
            "node_modules"
        ]
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ["env", {
                            "targets": {
                                "browsers": ["last 5 Chrome versions", "safari >= 7"]
                            }
                        }]
                    ]
                }
            }]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })
    ]
}];