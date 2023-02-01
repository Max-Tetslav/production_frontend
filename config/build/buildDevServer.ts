import { Configuration as DevServerConfigurations } from "webpack-dev-server";
import { BuildOptions } from "../types/config";

const buildDevServer = ({ port }: BuildOptions): DevServerConfigurations => {
  return {
    port,
    open: true,
    historyApiFallback: true,
  };
};

export default buildDevServer;
