Package.describe({
  name: 'renaldo:vimeo-video-search',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Simple VimeoApi to search videos, and related videos',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/daltonrenaldo/meteor-vimeo-search',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['http', 'underscore'], ['server']);
  api.export('VimeoApi');
  api.addFiles('vimeo-video-search.js', ['server']);

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('renaldo:vimeo-video-search');
  api.addFiles('vimeo-video-search-tests.js');
});
