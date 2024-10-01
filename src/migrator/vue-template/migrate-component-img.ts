import * as cheerio from 'cheerio';

export default (template: cheerio.CheerioAPI) => {
  template('v-img').each((_, element) => {
    if (template(element).attr('ticks') !== undefined) {
      template(element).attr('show-ticks', '');
      template(element).removeAttr('ticks');
    }

    if (template(element).attr(':tick-labels') !== undefined) {
      const tickLabels = template(element).attr(':tick-labels');
      template(element).attr(':ticks', tickLabels);
      template(element).removeAttr(':tick-labels');
    }

    if (template(element).attr(':vertical') !== undefined) {
      const vertical = template(element).attr(':vertical');
      template(element).attr(':direction', `${vertical} ? 'vertical' : 'horizontal'`);
      template(element).removeAttr(':vertical');
    }

    if (template(element).attr('vertical') !== undefined) {
      template(element).attr('direction', 'vertical');
      template(element).removeAttr('vertical');
    }
  });

  return template;
};
