import * as cheerio from 'cheerio';

export default (template: cheerio.CheerioAPI) => {
  template('[\\@value]').each((_, element) => {
    const input = template(element);
    const vOn = input.attr(':value');
    if (vOn) {
      input.removeAttr('@input');
      input.attr('@update:model-value', vOn);
    }
  });
  return template;
};
