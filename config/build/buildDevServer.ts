import { BuildOptions } from "../types/config";
import { Configuration as DevServerConfigurations } from "webpack-dev-server";

const buildDevServer = ({ port }: BuildOptions): DevServerConfigurations => {
  return {
    port,
    open: true,
  };
};

export default buildDevServer;
