import { extractPropertiesWithDecorator } from '../utils';
import type MigrationManager from '../migratorManager';

// @PropSync
export default (migrationManager: MigrationManager) => {
  const { clazz } = migrationManager;
  const propSyncs = extractPropertiesWithDecorator(clazz, 'PropSync');

  if (!propSyncs.length) {
    return;
  }

  migrationManager.outFile.addImportDeclaration({
    namedImports: ['PropSync'],
    moduleSpecifier: 'vue-facing-decorator',
  });
};
