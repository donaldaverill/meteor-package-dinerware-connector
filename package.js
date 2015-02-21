Package.describe({
  name: 'donaldaverill:dinerware',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});


Package.onUse(function(api) {
  api.versionsFrom('1.0');
  Npm.depends({
    'tedious': '1.7.0',
    'tedious-connection-pool': '0.3.2'
  });
  api.export('Dinerware', ['server']);
  api.use('mongo', ['server']);
  api.use('underscore', ['server']);
  api.addFiles('server/dinerware.js', ['server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('donaldaverill:dinerware');
  api.addFiles('donaldaverill:dinerware-tests.js');
});
