const { config } = require('../lib/config');

config.maxInstances = 4;

config.capabilities = [{
  maxInstances: 4,
  browserName: 'phantomjs',
}];

config.services = ['phantomjs'];

exports.config = config;
