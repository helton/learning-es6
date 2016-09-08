'use strict';

var _addition = require('./math/addition');

var addition = _interopRequireWildcard(_addition);

var _users = require('./data/users');

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//importing objects (we can't import anything, not just only functions and classes)
//importing functions on by one with alias
exports.run = function () {
  console.log('2 + 3 =', (0, _addition.sumTwo)(2, 3));
  console.log('2 + 3 + 4 =', (0, _addition.sumThree)(2, 3, 4));

  console.log('2 + 3 =', addition.sumTwo(2, 3));
  console.log('2 + 3 + 4 =', addition.sumThree(2, 3, 4));

  console.log(_users.users);
  console.log(_.filter(_users.users, { age: 36 }));
};

//importing 3rd-party modules


//importing the whole module with alias
//# sourceMappingURL=modules-import-export.js.map