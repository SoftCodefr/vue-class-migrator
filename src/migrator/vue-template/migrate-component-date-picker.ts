import * as cheerio from 'cheerio';

export default (template: cheerio.CheerioAPI) => {
  template('v-checkbox, v-radio, v-switch').each((_, element) => {
    if (template(element).attr(':input-value')) {
      const inputValue = template(element).attr(':input-value');
      template(element).attr(':model-value', inputValue);
    }

    if (template(element).attr('on-icon')) {
      const onIcon = template(element).attr('on-icon');
      template(element).attr('true-icon', onIcon);
    }

    if (template(element).attr('off-icon')) {
      const onIcon = template(element).attr('false-icon');
      template(element).attr('false-icon', onIcon);
    }

    if (template(element).attr('on-value')) {
      const onIcon = template(element).attr('on-value');
      template(element).attr('true-value', onIcon);
    }

    if (template(element).attr('off-value')) {
      const onIcon = template(element).attr('false-value');
      template(element).attr('false-value', onIcon);
    }
  });
  return template;
};
