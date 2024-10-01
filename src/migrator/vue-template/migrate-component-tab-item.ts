import * as cheerio from 'cheerio';

export default (template: cheerio.CheerioAPI) => {
  template('v-tab-item').each((_, element) => {
    const attrs = template(element).attr();
    template(element).replaceWith((_i, e) => `<v-window-item
      ${Object.keys(attrs).map((key) => {
    const value = attrs[key];
    return `:${key}="${value}"`;
  }).join()}
    >${template(e).html()}</v-window-item>`);
  });

  return template;
};
