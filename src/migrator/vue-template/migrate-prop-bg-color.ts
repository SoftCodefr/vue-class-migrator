import * as cheerio from 'cheerio';

export default (template: cheerio.CheerioAPI) => {
  template('[\\background-color]').each((_, element) => {
    const input = template(element);
    const vBind = input.attr('background-color');
    if (vBind) {
      input.removeAttr('background-color');
      input.attr('bg-color', vBind);
    }
  });
  return template;
};
