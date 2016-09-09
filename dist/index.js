'use strict';

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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var modules = [{ name: 'const declarations', value: constDeclarations }, { name: 'babel tests', value: babelTests }, { name: 'modules import export', value: modulesImportExport }, { name: 'object enhancements', value: objectEnhancements }, { name: 'spread operator', value: spreadOperator }, { name: 'shorthand properties', value: shorthandProperties }, { name: 'generator basics', value: generatorBasics }, { name: 'string templates', value: stringTemplates }];

modules.forEach(function (module) {
  console.log('-----------------------------');
  console.log(module.name);
  console.log('-----------------------------');
  module.value.run();
});
//# sourceMappingURL=index.js.map