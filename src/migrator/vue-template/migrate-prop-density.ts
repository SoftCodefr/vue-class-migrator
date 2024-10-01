import * as cheerio from 'cheerio';

export default (template: cheerio.CheerioAPI) => {
  template('[dense], [\\:dense]').each((_, element) => {
    const input = template(element);
    const { tagName } = input.get(0);
    if (['v-select', 'v-btn-toggle', 'v-alert', 'v-text-field', 'v-list', 'v-list-item'].includes(tagName)) {
      const vBind = input.attr(':dense');
      if (vBind) {
        input.removeAttr(':dense');
        input.attr(':density', `${vBind} ? 'dense' : 'default'`);
      }

      if (input.attr('dense') !== undefined) {
        input.removeAttr('dense');
        input.attr('density', 'dense');
      }
    }
  });
  return template;
};
