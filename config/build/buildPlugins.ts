import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildOptions } from "../types/config";

// можно улучшить тип для options
const buildPlugins = ({ paths }: BuildOptions): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash]:8.css",
      chunkFilename: "css/[name].[contenthash]:8.css",
    }),
  ];
};

export default buildPlugins;
