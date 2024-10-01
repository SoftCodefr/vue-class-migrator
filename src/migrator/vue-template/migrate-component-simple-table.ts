import * as cheerio from 'cheerio';

export default (template: cheerio.CheerioAPI) => {
  template('v-simple-table').each((_, element) => {
    const attrs = template(element).attr();
    template(element).replaceWith((_i, e) => `<v-table
    ${Object.keys(attrs).map((key) => {
    const value = attrs[key];
    return `:${key}="${value}"`;
  }).join()}
    >${template(e).html()}</v-table>`);
  });

  return template;
};
