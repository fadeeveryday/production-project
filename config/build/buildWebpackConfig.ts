import webpack from 'webpack'
import { BuildOptions } from "./types/config";
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolves } from './buildResolves'
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {paths, mode, isDev} = options 
  return {
    mode: mode, // всего 2 значения mode or production 
    entry: paths.entry, //стартовая точка приложения 
    output: {
        filename: '[name][contenthash].js',
        // явно не указываем путь, а передаем как св-ва объекта,благодаря деструктуризации
        path: paths.build,  
        clean: true
    }, //настройки того, куда монтируется приложение
  
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
     }, 
    resolve: buildResolves(),
    devtool: isDev ? 'inline-source-map': undefined,
    devServer: isDev ? buildDevServer(options): undefined,
  }
}