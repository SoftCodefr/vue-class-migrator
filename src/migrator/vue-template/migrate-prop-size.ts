import * as cheerio from 'cheerio';

export default (template: cheerio.CheerioAPI) => {
  template('[x-small], [small], [large], [x-large]').each((_, element) => {
    const input = template(element);

    if (input.attr('x-small') !== undefined) {
      input.removeAttr('x-small');
      input.attr('size', 'x-small');
    }

    if (input.attr('small') !== undefined) {
      input.removeAttr('small');
      input.attr('size', 'small');
    }

    if (input.attr('large') !== undefined) {
      input.removeAttr('large');
      input.attr('size', 'large');
    }

    if (input.attr('x-large') !== undefined) {
      input.removeAttr('x-large');
      input.attr('size', 'x-large');
    }
  });
  return template;
};
