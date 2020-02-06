const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'build/'
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 50000
                        }
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    }
};

module.exports = config;