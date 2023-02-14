import {
    DefinePlugin,
    HotModuleReplacementPlugin,
    ProgressPlugin,
    WebpackPluginInstance,
} from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import { BuildOptions } from '../types/config';

// можно улучшить тип для options
const buildPlugins = ({
    isDev,
    paths,
}: BuildOptions): WebpackPluginInstance[] => {
    const plugins: WebpackPluginInstance[] = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash]:8.css',
            chunkFilename: 'css/[name].[contenthash]:8.css',
        }),
        new ProgressPlugin(),
        new DefinePlugin({
            __IS_DEV__: isDev,
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: 'static',
        }),
    ];

    if (isDev) {
        plugins.push(new HotModuleReplacementPlugin());
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    return plugins;
};

export default buildPlugins;
