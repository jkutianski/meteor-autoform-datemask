/* jshint esversion: 6 */

Tinytest.add('AutoForm - datemask exist', test => {
  let _inputTypeDefinitions = AutoForm._inputTypeDefinitions;
  test.instanceOf(
    _inputTypeDefinitions.datemask, Object
  );
});

Tinytest.add('AutoForm - ContextAjust', test => {
  let _inputTypeDefinitions = AutoForm._inputTypeDefinitions;

  test.instanceOf(
    _inputTypeDefinitions.datemask.contextAdjust, Object
  );

  test.equal(
    typeof _inputTypeDefinitions.datemask.contextAdjust, 'function'
  );

  let ctx = { atts: { mask: 'mask', maskoptions: {}, format: 'format', minlength: 1 } };

  test.equal(
    _inputTypeDefinitions.datemask.contextAdjust(ctx), { atts: {} }
  );
});

Tinytest.add('AutoForm - ValueOut', test => {
  let _inputTypeDefinitions = AutoForm._inputTypeDefinitions;

  test.instanceOf(
    _inputTypeDefinitions.datemask.valueOut, Object
  );
  test.equal(
    typeof _inputTypeDefinitions.datemask.valueOut, 'function'
  );

  _inputTypeDefinitions.datemask.contextAdjust({
    atts: {
      format: 'DD/MM/YYYY',
      minlength: 10
    }
  });

  test.equal(
    _inputTypeDefinitions.datemask.valueOut.call({ val: () => '' }), ''
  );

  test.equal(
    _inputTypeDefinitions.datemask.valueOut.call({ val: () => '31/31/3131' }).toString(), 'Invalid Date'
  );

  test.equal(
    _inputTypeDefinitions.datemask.valueOut.call({ val: () => '01/01/01' }).toString(), 'Invalid Date'
  );

  test.notEqual(
    _inputTypeDefinitions.datemask.valueOut.call({ val: () => '01/01/2001' }).toString(), 'Invalid Date'
  );
});


Tinytest.add('Template - afDateMask exist', test => {
  test.instanceOf(
    Template.afDateMask, Object
  );
});

Tinytest.add('Template - helpers', test => {
  test.equal(
    Object.keys(Template.afDateMask.__helpers), [' atts']
  );

  test.equal(
    Template.afDateMask.__helpers[' atts'].call({ atts: { test: true } }),
    { test: true, class: 'form-control' }
  );
});