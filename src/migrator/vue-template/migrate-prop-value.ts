import * as cheerio from 'cheerio';

export default (template: cheerio.CheerioAPI) => {
  template('[\\:value]').each((_, element) => {
    const input = template(element);
    const vBind = input.attr(':value');
    if (vBind) {
      input.removeAttr(':value');
      input.attr(':model-value', vBind);
    }
  });
  return template;
};
