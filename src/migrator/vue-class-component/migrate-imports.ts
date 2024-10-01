import { SourceFile } from 'ts-morph';

// Import handling
export default (outFile: SourceFile) => {
  const importStatementsToRemove = ['vue-property-decorator', 'vue-class-component', 'vuex-class'];

  const vueImport = outFile.getImportDeclaration(
    (importDeclaration) => importDeclaration.getModuleSpecifierValue() === 'vue',
  );

  if (!vueImport) {
    outFile.addImportDeclaration({
      defaultImport: '{ Component, Vue, toNative }',
      moduleSpecifier: 'vue-facing-decorator',
    });
  } else {
    vueImport.addNamedImport('defineComponent');
  }

  outFile.getImportDeclarations().forEach((importDeclaration) => {
    const moduleSpecifier = importDeclaration.getModuleSpecifierValue();
    if (importStatementsToRemove.includes(moduleSpecifier)) {
      importDeclaration.remove();
    }
  });
};
