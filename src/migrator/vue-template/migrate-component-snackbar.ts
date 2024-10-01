import * as cheerio from 'cheerio';

export default (template: cheerio.CheerioAPI) => {
  template('v-snackbar').each((_, element) => {
    // for each "template" children of "v-snackbar"
    template(element).children().each((_i, child) => {
      // if "template" child has "v-snackbar" tag
      if (template(child).is('template')) {
        if (template(child).attr('v-slot:action') !== undefined) {
          template(child).attr('v-slot:actions', '{ attrs }');
        }
      }
    });
  });
  return template;
};
