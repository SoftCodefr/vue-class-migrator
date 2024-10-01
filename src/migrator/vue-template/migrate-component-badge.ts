import * as cheerio from 'cheerio';

export default (template: cheerio.CheerioAPI) => {
  template('v-badge').each((_, element) => {
    if (template(element).attr('overlap') !== undefined) {
      template(element).removeAttr('overlap');
    } else {
      template(element).attr('floating', '');
    }

    if (template(element).attr('mode') !== undefined) {
      template(element).removeAttr('mode');
    }

    if (template(element).attr('origin') !== undefined) {
      template(element).removeAttr('origin');
    }

    if (template(element).attr('avatar') !== undefined) {
      template(element).removeAttr('avatar');
    }
  });
  return template;
};
