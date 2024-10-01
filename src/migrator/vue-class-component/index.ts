import type MigrationManager from '../migratorManager';
import migrateImports from './migrate-imports';
import migrateExport from './migrate-export';

export default (migrationManager: MigrationManager) => {
  migrateImports(migrationManager.outFile);
  migrateExport(migrationManager.outFile, migrationManager.clazz);
};
