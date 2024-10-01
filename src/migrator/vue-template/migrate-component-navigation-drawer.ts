import * as cheerio from 'cheerio';

export default (template: cheerio.CheerioAPI) => {
  template('v-navigation-drawer').each((_, element) => {
    if (template(element).attr('stateless') !== undefined) {
      template(element).attr(':model-value', 'true');
      template(element).removeAttr('stateless');
    }

    if (template(element).attr(':stateless') !== undefined) {
      const stateless = template(element).attr(':stateless');
      template(element).attr('v-model', stateless);
    }
  });

  return template;
};
