import path from "path";
import { Configuration } from "webpack";
import { BuildOptions } from "../types/config";
import buildLoaders from "./buildLoaders";
import buildPlugins from "./buildPlugins";
import buildResolvers from "./buildResolvers";

const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, paths } = options;

  return {
    mode: "production",
    entry: paths.entry,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
  };
};

export default buildWebpackConfig;
