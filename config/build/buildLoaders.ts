import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { RuleSetRule } from "webpack";
import { BuildOptions } from "../types/config";

const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const stylesLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (path: string) => Boolean(path.includes(".module.")),
            localIdentName: isDev
              ? "[folder]__[local]_[hash:base64:6]"
              : "[hash:base64:8]",
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  return [typescriptLoader, stylesLoader];
};

export default buildLoaders;
