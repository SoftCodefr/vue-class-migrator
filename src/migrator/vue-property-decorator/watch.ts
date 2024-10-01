import { extractPropertiesWithDecorator } from '../utils';
import type MigrationManager from '../migratorManager';

// @Watcher
export default (migrationManager: MigrationManager) => {
  const { clazz } = migrationManager;
  const watchs = extractPropertiesWithDecorator(clazz, 'Watch');
  if (!watchs.length) {
    return;
  }

  migrationManager.outFile.addImportDeclaration({
    namedImports: ['Watch'],
    moduleSpecifier: 'vue-facing-decorator',
  });
};
