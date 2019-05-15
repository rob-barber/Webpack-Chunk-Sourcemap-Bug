const path = require('path');

module.exports = {

    mode: 'development',
    devtool: 'eval-source-map',

    entry: {
        'main': './src/index.js',
        'second': './src/second.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
     contentBase: './dist'
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    optimization: {
        splitChunks: {
            chunks: "all",
            // minSize: 1
        }
    }
};