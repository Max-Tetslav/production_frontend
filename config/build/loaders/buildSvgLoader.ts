import { RuleSetRule } from 'webpack';

const buildSvgLoader = (): RuleSetRule => {
    const svgLoader: RuleSetRule = {
        test: /\.svg$/,
        use: '@svgr/webpack',
    };

    return svgLoader;
};

export default buildSvgLoader;
