import { RuleSetRule } from 'webpack';
import { BuildOptions } from '../types/config';
import buildCssLoaders from './loaders/buildCssLoaders';
import buildSvgLoader from './loaders/buildSvgLoader';

const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
    const svgLoader: RuleSetRule = buildSvgLoader();

    const mediaLoader: RuleSetRule = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };

    const tsLoader: RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const babelLoader: RuleSetRule = {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };

    const stylesLoader: RuleSetRule = buildCssLoaders(isDev);

    return [svgLoader, mediaLoader, stylesLoader, babelLoader, tsLoader];
};

export default buildLoaders;
