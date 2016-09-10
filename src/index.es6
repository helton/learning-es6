import _ from 'lodash';
import * as constDeclarations from './const-declarations';
import * as babelTests from './babel-tests';
import * as modulesImportExport from './modules-import-export';
import * as objectEnhancements from './object-enhancements';
import * as spreadOperator from './spread-operator';
import * as shorthandProperties from './shorthand-properties'
import * as generatorBasics from './generator-basics';
import * as stringTemplates from './string-templates';
import * as destructuringAssignment from './destructuring-assignment';
import * as defaultParameters from './default-parameters';
import * as arrowFunctions from './arrow-functions';

let modules = [
  { name: 'const declarations', value: constDeclarations },
  { name: 'babel tests', value: babelTests },
  { name: 'modules import export', value: modulesImportExport },
  { name: 'object enhancements', value: objectEnhancements },
  { name: 'spread operator', value: spreadOperator },
  { name: 'shorthand properties', value: shorthandProperties },
  { name: 'generator basics', value: generatorBasics },
  { name: 'string templates', value: stringTemplates },
  { name: 'destructuring assignment', value: destructuringAssignment },
  { name: 'default parameters', value: defaultParameters },
  { name: 'arrow functions', value: arrowFunctions }
];

modules.forEach(({name: moduleName, value: module}, index) => {
  let sep = '='.repeat(30);
  console.log(`\n${sep}`);
  console.log(`${index + 1}) ${_.startCase(moduleName)}`);
  console.log(sep);
  module.run();
});

/*
// Why is it not working? Is it a Babel issue?
for ({name: moduleName, value: module} of modules) {
  let sep = _.repeat('=', 30);
  console.log(`\n${sep}`);
  console.log(`${_.startCase(moduleName)}`);
  console.log(sep);
  module.run();
}
*/
