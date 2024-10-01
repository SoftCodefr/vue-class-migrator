import * as cheerio from 'cheerio';

export default (template: cheerio.CheerioAPI) => {
  template('v-expansion-panel-header').each((_, element) => {
    const attrs = template(element).attr();
    template(element).replaceWith((_i, e) => `<v-expansion-panel-title
      ${Object.keys(attrs).map((key) => {
    const value = attrs[key];
    return `:${key}="${value}"`;
  }).join()}
      >${template(e).html()}</v-expansion-panel-title>`);
  });

  template('v-expansion-panel-content').each((_, element) => {
    const attrs = template(element).attr();
    template(element).replaceWith((_i, e) => `<v-expansion-panel-text
      ${Object.keys(attrs).map((key) => {
    const value = attrs[key];
    return `:${key}="${value}"`;
  }).join()}
      >${template(e).html()}</v-expansion-panel-text>`);
  });

  return template;
};
