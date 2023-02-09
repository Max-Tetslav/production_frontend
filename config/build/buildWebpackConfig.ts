import { Configuration } from 'webpack';

import { BuildOptions } from '../types/config';
import buildDevServer from './buildDevServer';
import buildLoaders from './buildLoaders';
import buildPlugins from './buildPlugins';
import buildResolvers from './buildResolvers';

const buildWebpackConfig = (options: BuildOptions): Configuration => {
    const { mode, paths, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        devServer: buildDevServer(options),
        devtool: isDev ? 'inline-source-map' : undefined,
    };
};

export default buildWebpackConfig;
