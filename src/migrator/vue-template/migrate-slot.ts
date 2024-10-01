import * as cheerio from 'cheerio';

export default (template: cheerio.CheerioAPI) => {
  template('*').each((_, element) => {
    const input = template(element);
    const attrs = input.attr();

    Object.keys(attrs).forEach((attr) => {
      if (attr.startsWith('v-slot:')) {
        const slotName = attr.replace('v-slot:', '#');
        const slotValue = input.attr(attr);
        if (slotValue) {
          input.removeAttr(attr);
          input.attr(slotName, '{ props }');
          input.find('*').each((i, child) => {
            const childElement = template(child);
            const childAttrs = childElement.attr();
            Object.keys(childAttrs).forEach((childAttr) => {
              if (childAttr === 'v-on') {
                childElement.attr('v-bind', 'props');
                childElement.removeAttr('v-on');
              }
              if (childAttr === 'v-bind') {
                childElement.attr('v-bind', 'props');
              }
            });
          });
        }
      }
    });
  });
};
