import { ClassDeclaration, SourceFile } from 'ts-morph';

export default (outFile: SourceFile, clazz: ClassDeclaration) => {
  const exportStatement = [
    '',
    `export default toNative(${clazz.getName()})`,
    '',
  ];
  outFile.addStatements(exportStatement);
};
