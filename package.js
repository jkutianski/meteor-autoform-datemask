Package.describe({
  name: 'jkutianski:autoform-datemask',
  summary: 'Custom date mask input type for AutoForm',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.use([
    'ecmascript',
    'templating@1.0.0',
    'blaze@2.0.0',
    'underscore@1.0.0',
    'momentjs:moment@2.17.0',
    'aldeed:autoform@6.0.0',
    'igorescobar:jquery-mask-plugin'
  ], 'client');

  api.addFiles([
    'autoform-datemask.html',
    'autoform-datemask.js'
  ], 'client');
});
