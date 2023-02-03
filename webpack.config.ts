import { Configuration } from "webpack";
import path from "path";

import { BuildEnv, BuildMode, BuildPaths } from "./config/types/config";
import buildWebpackConfig from "./config/build/buildWebpackConfig";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
  src: path.resolve(__dirname, "src"),
};

export default (env: BuildEnv) => {
  const mode: BuildMode = env.mode || "development";
  const isDev = mode === "development";
  const port = env.port || 3000;

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });

  return config;
};
