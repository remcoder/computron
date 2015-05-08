Package.describe({
  name: 'remcoder:computron',
  version: '0.0.1',
  summary: 'Simple reactive computations, inspired by Knockout and Vue.js',
  git: 'https://github.com/remcoder/computron',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('reactive-var');
  api.addFiles('computron.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('reactive-var');
  api.use('practicalmeteor:munit');
  api.use('remcoder:computron');
  api.addFiles('computron-tests.js');
});
