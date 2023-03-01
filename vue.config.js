const path = require('path');
const fs = require('fs');
const EventHooksPlugin = require('event-hooks-webpack-plugin');

module.exports = {
  chainWebpack(config) {
    config.plugin('SystemJSPublicPathWebpackPlugin').tap((args) => {
      args[0].rootDirectoryLevel = 1;
      return args;
    });
    config.devServer.headers({
      'Access-Control-Allow-Origin': '*',
    });
    config.devServer.set('port', 8084);
    config.output.filename('[name].js');
    config.output.publicPath('/');
  },
  lintOnSave: true,
  filenameHashing: false,
  configureWebpack: {
    plugins: [
      new EventHooksPlugin({
        done: () => {
          if (process.env.NODE_ENV !== 'development') {
            const buildDir = path.join(__dirname, '/dist');
            fs.unlinkSync(`${buildDir}/index.html`);
          }
        },
      }),
    ],
    externals: ['single-spa-vue',/^@portafolio\/.+/],
    output: {
      libraryTarget: 'system',
    },
  },
}