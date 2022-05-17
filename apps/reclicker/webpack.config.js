const nrwlConfig = require('@nrwl/react/plugins/webpack.js'); // require the main @nrwl/react/plugins/webpack configuration function
const { merge } = require('webpack-merge');

module.exports = (config) => {
  nrwlConfig(config); // first call it so that it @nrwl/react plugin adds its configs

  // custom config as second param of merge function
  return merge(config, {});
};
