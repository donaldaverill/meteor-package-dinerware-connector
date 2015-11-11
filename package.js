Package.describe({
  name: 'fourquet:dinerware-connector',
  summary: 'Connect to a Dinerware POS',
  version: '1.13.1_1',
  git: 'https://github.com/fourquet/meteor-package-dinerware-connector.git'
});

Npm.depends({
  'tedious': '1.13.1',
  'tedious-connection-pool': '0.3.9'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.export('Dinerware', ['server']);
  api.use('mongo', ['server']);
  api.use('underscore', ['server']);
  api.addFiles('server/dinerware.js', ['server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fourquet:dinerware-connector');
  api.addFiles('dinerware-tests.js');
});
