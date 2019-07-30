# meteor-autoform-datemask
Is a input date type based on [jQuery-Mask-Plugin](https://igorescobar.github.io/jQuery-Mask-Plugin/) for Meteor Autoform

## Install it
`meteor add jkutianski:autoform-datemask`

This package is based on [jQuery-Mask-Plugin](https://igorescobar.github.io/jQuery-Mask-Plugin/), be sure that is loaded before use this plugin.
At the moment the Meteor package on Atmotphere has problem. I recomend copy it on `/packages` and change the `packages.js` whit this one.
```
Package.describe({
  "name": "igorescobar:jquery-mask-plugin",
  "version": "1.14.15",
  "summary": "A jQuery Plugin to make masks on form fields and HTML elements. (Modificado por JPK)",
  "git": "git@github.com:jkutianski/jQuery-Mask-Plugin"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('src/jquery.mask.js', 'client');
});
```

## How to use it

Create a SimpleSchema and set `datemask` as AutoForm type

```
const SimpleSchemaDateField = new SimpleSchema({
  date: {
    type: Date,
    label: 'Fecha',
    optional: false,
    autoform: {
      type: 'datemask',
      minlength: 10,
      placeholder: 'dd/mm/aaaa',
      mask: '00/00/0000',
      format: 'DD/MM/YYYY'
    }
  }
});
```

The options are:

minlength: is the length of input including the separators
mask: is the jquery-mask string. [See jquery-mask usage](https://igorescobar.github.io/jQuery-Mask-Plugin/docs.html#basic-usage)
maskoptions: is the options for jquery-mask. [See jquery-mask options](https://igorescobar.github.io/jQuery-Mask-Plugin/docs.html#field-options)
format: is the momentjs date format. [See Momentjs usage](https://momentjs.com/)
