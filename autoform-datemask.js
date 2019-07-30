/* global AutoForm, moment */
/* jshint esversion: 6 */


let options = {};

AutoForm.addInputType('datemask', {
  template: 'afDateMask',
  valueOut: function afDateMaskValOut() {

    if (this.val() === '') {
      return this.val();
    }

    const val = moment(this.val(), options.format);

    if (
      val._isValid &&
      typeof options.minlength === 'number' &&
      val._i.length >= options.minlength
    ) {
      return val.toDate();
    }

    return new Date('invalid');
  },
  valueConverters: {
    string: function dateToDateString(val) {
      return (val instanceof Date) ? moment(val).format(options.format) : val;
    },
    stringArray: function dateTostringArray(val) {
      return (val instanceof Date) ? [this.valueConverters.string] : val;
    }
  },
  contextAdjust: function afDateMaskCtxAjst(ctx) {
    options = {
      mask: ctx.atts.mask,
      maskoptions: ctx.atts.maskoptions,
      format: ctx.atts.format,
      minlength: ctx.atts.minlength,
    };

    delete ctx.atts.mask;
    delete ctx.atts.maskoptions;
    delete ctx.atts.format;
    delete ctx.atts.minlength;

    return ctx;
  }
});


Template.afDateMask.helpers({
  atts: function afDateMaskAtts() {
    let atts = _.clone(this.atts);

    if (AutoForm.getDefaultTemplate() === 'bootstrap3') {
      // Add bootstrap class
      atts = AutoForm.Utility.addClass(atts, "form-control");
    }

    return atts;
  }
});

Template.afDateMask.onRendered(function onRendered() {
  const $input = this.$(':input');

  $input.mask(options.mask, options.maskoptions);
});
