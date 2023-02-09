import { Configuration as DevServerConfigurations } from 'webpack-dev-server';
import { BuildOptions } from '../types/config';

const buildDevServer = ({ port }: BuildOptions): DevServerConfigurations => ({
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
});

export default buildDevServer;
