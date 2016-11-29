const { config } = require('../lib/config.js');

if (process.env.DEBUG) {
  const timeout = (1000 * 60 * 60 * 24);
  config.debug = true;
  config.waitforTimeout = timeout;
  config.cucumberOpts.timeout = timeout;
}

exports.config = config;
