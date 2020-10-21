const path = require('path');

module.exports = {
  dev: {
    port: 8000,
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  build: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
};
