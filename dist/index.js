'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _constDeclarations = require('./const-declarations');

var constDeclarations = _interopRequireWildcard(_constDeclarations);

var _babelTests = require('./babel-tests');

var babelTests = _interopRequireWildcard(_babelTests);

var _modulesImportExport = require('./modules-import-export');

var modulesImportExport = _interopRequireWildcard(_modulesImportExport);

var _objectEnhancements = require('./object-enhancements');

var objectEnhancements = _interopRequireWildcard(_objectEnhancements);

var _spreadOperator = require('./spread-operator');

var spreadOperator = _interopRequireWildcard(_spreadOperator);

var _shorthandProperties = require('./shorthand-properties');

var shorthandProperties = _interopRequireWildcard(_shorthandProperties);

var _generatorBasics = require('./generator-basics');

var generatorBasics = _interopRequireWildcard(_generatorBasics);

var _stringTemplates = require('./string-templates');

var stringTemplates = _interopRequireWildcard(_stringTemplates);

var _destructuringAssignment = require('./destructuring-assignment');

var destructuringAssignment = _interopRequireWildcard(_destructuringAssignment);

var _defaultParameters = require('./default-parameters');

var defaultParameters = _interopRequireWildcard(_defaultParameters);

var _arrowFunctions = require('./arrow-functions');

var arrowFunctions = _interopRequireWildcard(_arrowFunctions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modules = [{ name: 'const declarations', value: constDeclarations }, { name: 'babel tests', value: babelTests }, { name: 'modules import export', value: modulesImportExport }, { name: 'object enhancements', value: objectEnhancements }, { name: 'spread operator', value: spreadOperator }, { name: 'shorthand properties', value: shorthandProperties }, { name: 'generator basics', value: generatorBasics }, { name: 'string templates', value: stringTemplates }, { name: 'destructuring assignment', value: destructuringAssignment }, { name: 'default parameters', value: defaultParameters }, { name: 'arrow functions', value: arrowFunctions }];

modules.forEach(function (_ref, index) {
  var moduleName = _ref.name;
  var module = _ref.value;

  var sep = '='.repeat(30);
  console.log('\n' + sep);
  console.log(index + 1 + ') ' + _lodash2.default.startCase(moduleName));
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
//# sourceMappingURL=index.js.map