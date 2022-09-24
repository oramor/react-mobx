import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const CONFIG = {
    rootPath: '/home/romaro/react-mobx',
    /**
     * Достаточно изменить имя проекта
     */
    projectDirName: 'self-update',
    outputDirName: '_public',
    pageName: 'TestPage',
};

function pageFileName(type) {
    const pageName = CONFIG.pageName;

    switch (type) {
        case 'ejs':
            return pageName + '.ejs';
        case 'chunk': {
            const path = pageName + 'Chunk.tsx';
            return path;
        }

        default:
            Error('unknown type');
    }
}

export default {
    mode: 'development',
    entry: './' + path.join('pages', CONFIG.pageName, pageFileName('chunk')),
    context: path.join(CONFIG.rootPath, 'packages', CONFIG.projectDirName),
    output: {
        path: path.join(
            CONFIG.rootPath,
            'packages',
            CONFIG.projectDirName,
            CONFIG.outputDirName,
        ),
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
            {
                /**
                 * Для файлов без модульного постфикса (в данном случае .m)
                 * выполняется стандартная обработка
                 */
                test: /^((?!\.m).)*s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            template:
                './' + path.join('pages', CONFIG.pageName, pageFileName('ejs')),
            //chunks: ['index', CONFIG.pageName.concat('Chunk.tsx')],
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
