export default (template: string) => {
  const outTemplate = template
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&amp;/g, '&')
    .replace(/&#xe9;/g, 'é')
    .replace(/&#xe0;/g, 'à')
    .replace(/&#xe8;/g, 'è')
    .replace(/&#xe7;/g, 'ç')
    .replace(/&#xea;/g, 'ê')
    .replace(/&#xfb;/g, 'û')
    .replace(/&#xf4;/g, 'ô')
    .replace(/&#xf9;/g, 'ù')
    .replace(/&#xef;/g, 'ï')
    .replace(/&nbsp;/g, ' ')

    .replace(/=""/g, ' ');

  return outTemplate;
};
