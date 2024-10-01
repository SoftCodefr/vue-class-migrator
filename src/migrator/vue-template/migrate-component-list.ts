import * as cheerio from 'cheerio';

export default (template: cheerio.CheerioAPI) => {
  template('v-list').each((_, element) => {
    if (template(element).attr('two-line') !== undefined) {
      template(element).removeAttr('two-line');
      template(element).attr('lines', 'two');
    }

    if (template(element).attr('three-line') !== undefined) {
      template(element).removeAttr('three-line');
      template(element).attr('lines', 'three');
    }
  });

  template('v-list-item-group').each((_, element) => {
    if (template(element).attr('v-model')) {
      const modelValue = template(element).attr('v-model');
      template(element).removeAttr('v-model');
      template(element).parent().attr('v-model:selected', modelValue);
      template(element).children().each((_i, child) => {
        template(element).parent().append(child);
      });
      template(element).remove();
    }
  });

  template('v-list-item-icon').each((_, element) => {
    template(element).replaceWith(`<template #append>${template(element).html()}</template>`);
  });

  template('v-list-item-avatar').each((_, element) => {
    template(element).replaceWith(`<template #prepend>${template(element).html()}</template>`);
  });

  template('v-list-item-content').each((_, element) => {
    template(element).replaceWith(`<template>${template(element).html()}</template>`);
  });

  template('v-list-group').each((_, element) => {
    if (template(element).attr('sub-group') !== undefined) {
      template(element).removeAttr('sub-group');
    }
  });

  template('v-list-item').each((_, element) => {
    if (template(element).attr(':input-value') !== undefined) {
      const inputValue = template(element).attr(':input-value');
      template(element).attr(':active', inputValue);
      template(element).removeAttr(':input-value');
    }

    if (template(element).attr('inactive') !== undefined) {
      template(element).attr(':active', 'false');
      template(element).attr(':link', 'false');
      template(element).removeAttr('inactive');
    }

    if (template(element).attr(':inactive')) {
      const inactive = template(element).attr(':inactive');
      template(element).attr(':active', inactive);
      template(element).attr(':link', inactive);
      template(element).removeAttr('inactive');
    }
  });

  template('v-subheader').each((_, element) => {
    template(element).replaceWith(`<v-list-subheader>${template(element).html()}</v-list-subheader>`);
  });

  return template;
};
