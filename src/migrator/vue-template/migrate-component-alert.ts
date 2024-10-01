import * as cheerio from 'cheerio';

export default (template: cheerio.CheerioAPI) => {
  template('v-alert').each((_, element) => {
    if (template(element).attr('border')) {
      const border = template(element).attr('border');
      if (border === 'left') {
        template(element).attr('border', 'start');
      } else if (border === 'right') {
        template(element).attr('border', 'end');
      }
    }

    if (template(element).attr('colored-border')) {
      const coloredBorder = template(element).attr('colored-border');
      template(element).attr('border-color', coloredBorder);
    }

    if (template(element).attr('dismissable') !== undefined) {
      template(element).attr('closable', '');
      template(element).removeAttr('dismissable');
    }

    if (template(element).attr('text') !== undefined) {
      template(element).attr('variant', 'text');
      const text = template(element).attr('text');
      if (text && !template(element).children().length) {
        template(element).append(text);
      }
      template(element).removeAttr('text');
    }
  });
  return template;
};
