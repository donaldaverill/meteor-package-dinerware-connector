Package.describe({
  name: 'donaldaverill:dinerware',
  summary: 'Connect to a Dinerware POS',
  version: '1.0.1',
  git: 'https://github.com/donaldaverill/meteor-package-dinerware-connector.git'
});

Npm.depends({
  'tedious': '1.10.0',
  'tedious-connection-pool': '0.3.4'
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
  api.use('donaldaverill:dinerware-connector');
  api.addFiles('donaldaverill:dinerware-tests.js');
});
