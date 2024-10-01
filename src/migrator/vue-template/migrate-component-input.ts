import * as cheerio from 'cheerio';

export default (template: cheerio.CheerioAPI) => {
  template('v-autocomplete, v-checkbox, v-combobox, v-file-input, v-otp-input, v-select, v-text-field, v-textarea').each((_, element) => {
    if (template(element).attr('underlined')) {
      template(element).attr('variant', 'underlined');
      template(element).removeAttr('underlined');
    }

    if (template(element).attr('outlined')) {
      template(element).attr('variant', 'outlined');
      template(element).removeAttr('outlined');
    }

    if (template(element).attr('filled')) {
      template(element).attr('variant', 'filled');
      template(element).removeAttr('filled');
    }

    if (template(element).attr('solo')) {
      template(element).attr('variant', 'solo');
      template(element).removeAttr('solo');
    }

    if (template(element).attr('plain')) {
      template(element).attr('variant', 'plain');
      template(element).removeAttr('plain');
    }
  });
  return template;
};
