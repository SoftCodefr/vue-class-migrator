import * as cheerio from 'cheerio';

export default (template: cheerio.CheerioAPI) => {
  template('v-select').each((_, element) => {
    if (template(element).attr('item-text') !== undefined) {
      const itemText = template(element).attr('item-text');
      template(element).attr('item-title', `item => item.${itemText}`);
    }

    if (template(element).attr(':stateless') !== undefined) {
      const stateless = template(element).attr(':stateless');
      template(element).attr('v-model', stateless);
    }
  });

  return template;
};
