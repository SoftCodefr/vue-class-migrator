import * as cheerio from 'cheerio';

import postTreatment from './post-treatment';

import migrateInputEvent from './migrate-event-input';
import migratePropEvent from './migrate-prop-value';
import migratePropBgColor from './migrate-prop-bg-color';
import migratePropSize from './migrate-prop-size';
import migratePropPosition from './migrate-prop-position';
import migratePropDensity from './migrate-prop-density';
import migrateComponentGlobalInput from './migrate-component-input';

import migrateComponentAlert from './migrate-component-alert';
import migrateComponentBadge from './migrate-component-badge';
import migrateComponentBtn from './migrate-component-btn';
import migrateComponentCheckbox from './migrate-component-checkbox';
import migrateComponentDatePicker from './migrate-component-date-picker';
import migrateComponentList from './migrate-component-date-picker';
import migrateComponentNavigationDrawer from './migrate-component-navigation-drawer';
import migrateComponentSelect from './migrate-component-select';
import migrateComponentSimpleTable from './migrate-component-simple-table';

export default (template: string): string => {
  if (!template) {
    throw new Error('Template is empty');
  }

  const formatedTemplate = template.replace(/\n/g, `
`);

  const outTemplate = cheerio.load(formatedTemplate, { xmlMode: true });

  // General changes
  migratePropEvent(outTemplate);
  migratePropBgColor(outTemplate);
  migratePropSize(outTemplate);
  migratePropPosition(outTemplate);
  migratePropDensity(outTemplate);
  migrateInputEvent(outTemplate);

  migrateComponentGlobalInput(outTemplate);
  migrateComponentAlert(outTemplate);
  migrateComponentBadge(outTemplate);
  migrateComponentBtn(outTemplate);
  migrateComponentCheckbox(outTemplate);
  migrateComponentDatePicker(outTemplate);
  migrateComponentList(outTemplate);
  migrateComponentNavigationDrawer(outTemplate);
  migrateComponentSelect(outTemplate);
  migrateComponentSimpleTable(outTemplate);

  return postTreatment(outTemplate.html());
};
