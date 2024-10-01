// import { Node } from 'ts-morph';
import { extractPropertiesWithDecorator } from '../utils';
import type MigrationManager from '../migratorManager';

// @Prop
export default (migrationManager: MigrationManager) => {
  const { clazz } = migrationManager;
  const props = extractPropertiesWithDecorator(clazz, 'Prop');
  if (!props.length) {
    return;
  }

  migrationManager.outFile.addImportDeclaration({
    namedImports: ['Prop'],
    moduleSpecifier: 'vue-facing-decorator',
  });
};
