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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var modules = [{ name: 'const declarations', value: constDeclarations }, { name: 'babel tests', value: babelTests }, { name: 'modules import export', value: modulesImportExport }, { name: 'object enhancements', value: objectEnhancements }, { name: 'spread operator', value: spreadOperator }];

modules.forEach(function (module) {
  console.log('-----------------------------');
  console.log(module.name);
  console.log('-----------------------------');
  module.value.run();
});
//# sourceMappingURL=index.js.map