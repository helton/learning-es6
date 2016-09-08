import * as constDeclarations from './const-declarations';
import * as babelTests from './babel-tests';
import * as modulesImportExport from './modules-import-export';
import * as objectEnhancements from './object-enhancements';
import * as spreadOperator from './spread-operator';

let modules = [
  { name: 'const declarations', value: constDeclarations },
  { name: 'babel tests', value: babelTests },
  { name: 'modules import export', value: modulesImportExport },
  { name: 'object enhancements', value: objectEnhancements },
  { name: 'spread operator', value: spreadOperator }
];

modules.forEach(module => {
  console.log('-----------------------------');
  console.log(module.name);
  console.log('-----------------------------');
  module.value.run();
});
