import * as cheerio from 'cheerio';

export default (template: cheerio.CheerioAPI) => {
  template('[top], [bottom], [left], [right]').each((_, element) => {
    const input = template(element);

    if (input.attr('top') !== undefined) {
      input.removeAttr('top');
      input.attr('location', 'top');
    }

    if (input.attr('bottom') !== undefined) {
      input.removeAttr('bottom');
      input.attr('location', 'bottom');
    }

    if (input.attr('left') !== undefined) {
      input.removeAttr('left');
      input.attr('location', 'left');
    }

    if (input.attr('right') !== undefined) {
      input.removeAttr('right');
      input.attr('location', 'right');
    }
  });
  return template;
};
