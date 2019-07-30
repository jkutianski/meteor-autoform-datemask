Package.describe({
  name: 'jkutianski:autoform-datemask',
  summary: 'Custom date mask input type for AutoForm',
  documentation: './README.md',
  git: 'https://github.com/jkutianski/meteor-autoform-datemask.git',
  version: '0.0.2'
});

Package.onUse(function(api) {
  api.use([
    'ecmascript@0.6.3',
    'templating@1.0.0',
    'blaze@2.0.0',
    'underscore@1.0.0',
    'momentjs:moment@2.17.0',
    'aldeed:autoform@6.0.0',
    'igorescobar:jquery-mask-plugin@1.14.15'
  ], 'client');

  api.addFiles([
    'autoform-datemask.html',
    'autoform-datemask.js'
  ], 'client');
});
