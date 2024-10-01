import { extractPropertiesWithDecorator } from '../utils';
import type MigrationManager from '../migratorManager';

// @Ref
export default (migrationManager: MigrationManager) => {
  const { clazz } = migrationManager;
  const refs = extractPropertiesWithDecorator(clazz, 'Ref');

  if (!refs.length) {
    return;
  }

  migrationManager.outFile.addImportDeclaration({
    namedImports: ['Ref'],
    moduleSpecifier: 'vue-facing-decorator',
  });
};
