import { Configuration } from 'webpack';

const { VueLoaderPlugin } = require('vue-loader');

export function webpack(config: Configuration) {
  return {
    ...config,
    plugins: [...config.plugins, new VueLoaderPlugin()],
    module: {
      ...config.module,
      rules: [
        ...config.module?.rules,
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {},
        },
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                appendTsSuffixTo: [/\.vue$/],
              },
            },
          ],
        },
      ],
    },
    resolve: {
      ...config.resolve,
      extensions: [...config.resolve?.extensions, '.vue'],
      alias: {
        ...config.resolve?.alias,
        vue$: require.resolve('vue/dist/vue.esm-bundler.js'),
      },
    },
  };
}
