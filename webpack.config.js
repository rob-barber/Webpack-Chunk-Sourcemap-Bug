const path = require('path');

module.exports = {

    mode: 'development',
    devtool: 'eval-source-map',

    entry: {
        'main': './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
     contentBase: './dist'
    },

    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 1
        }
    }
};