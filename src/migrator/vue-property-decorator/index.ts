import type MigrationManager from '../migratorManager';
import migrateProps from './prop';
import migrateWatchers from './watch';
import migratePropSyncs from './propSync';
import migrateRefs from './ref';
// import migrateModels from './model';
// import migrateModelSyncs from './modelSync';

export default (migrationManager: MigrationManager) => {
  migrateProps(migrationManager);
  migrateWatchers(migrationManager);
  migratePropSyncs(migrationManager);
  migrateRefs(migrationManager);
  // migrateModels(migrationManager);
  // migrateModelSyncs(migrationManager);
};

export const supportedDecorators = [
  'Prop',
  'PropSync',
  'Ref',
  'Model',
  'ModelSync',
  'Watch',
]; // Class Property decorators
