import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const pageName = 'LoginFormPage';

export default {
    mode: 'development',
    entry: './' + path.join('pages', pageName, pageName + 'Chunk.tsx'),
    context: '/home/romaro/react-mobx/project',
    output: {
        path: '/home/romaro/react-mobx/project/_public',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.ejs$/,
                use: [
                    {
                        loader: 'ejs-compiled-loader',
                        options: {
                            htmlmin: false,
                            htmlminOptions: {
                                removeComments: true,
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './' + path.join('pages', pageName, pageName + '.ejs'),
        }),
    ],
    optimization: {
        minimize: false,
    },
    devServer: {
        static: {
            directory: './_public/views',
        },
        compress: true,
        port: 9000,
    },
};
