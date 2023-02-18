import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

const buildCssLoaders = (isDev: boolean): RuleSetRule => {
    const stylesLoader: RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
        // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (path: string) => Boolean(path.includes('.module.')),
                        localIdentName: isDev
                            ? '[folder]__[local]_[hash:base64:6]'
                            : '[hash:base64:8]',
                    },
                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };

    return stylesLoader;
};

export default buildCssLoaders;
