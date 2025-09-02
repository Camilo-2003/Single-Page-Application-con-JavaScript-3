const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './Src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.(js|mjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }

        ]

    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './Public/Index.html',
                filename: './index.html',
            }
        ),
        new CopyWebpackPlugin({
            patterns: [{ from: './Src/Styles/Main.css', to: '' }],
        })
    ]
}
