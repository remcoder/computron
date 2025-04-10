Package.describe({
  name: 'remcoder:computron',
  version: '0.0.4',
  summary: 'Computron is for creating reactive computations, just like ReactiveVar is for reactive values.',
  git: 'https://github.com/remcoder/computron',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('tracker', 'web');
  api.use('reactive-var', 'web');
  api.addFiles('computron.js', 'web');
});

Package.onTest(function(api) {
  api.use('tinytest', 'web');
  api.use('reactive-var', 'web');
  api.use('practicalmeteor:munit', 'web');
  api.use('remcoder:computron', 'web');
  api.addFiles('computron-tests.js', 'web');
});
