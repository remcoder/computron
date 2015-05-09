Package.describe({
  name: 'remcoder:computron',
  version: '0.0.4',
  summary: 'Computron is for creating reactive computations, just like ReactiveVar is for reactive values.',
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
