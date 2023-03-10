import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';

import { BuildPaths } from '../types/config';
import buildCssLoaders from '../build/loaders/buildCssLoaders';
import buildSvgLoader from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        html: '',
        build: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('ts', 'tsx');

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/ };
        }

        return rule;
    });

    config.module.rules.push(buildSvgLoader());
    config.module.rules.push(buildCssLoaders(true));

    config.plugins.push(
        new DefinePlugin({
            __IS_DEV__: true,
        }),
    );

    return config;
};
