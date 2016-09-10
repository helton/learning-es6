'use strict';

exports.run = function () {
  //var is function scoped
  //=> it's like you declare all your variables at the top of the function
  var varMessage = 'hi';
  {
    var varMessage = 'bye';
  }
  console.log(varMessage);

  //let is block scoped
  var letMessage = 'hi';
  {
    var _letMessage = 'bye';
  }
  console.log(letMessage);

  //the 'i' is not block scoped, it'll change every iteration
  var fs = [];
  for (var i = 0; i < 10; i++) {
    fs.push(function () {
      return console.log(i);
    });
  }
  fs.forEach(function (f) {
    return f();
  }); //output unexpected: all '10'

  //the 'i' is block scoped, it'll create a brand new one at every iteration
  fs = [];

  var _loop = function _loop(_i) {
    fs.push(function () {
      return console.log(_i);
    });
  };

  for (var _i = 0; _i < 10; _i++) {
    _loop(_i);
  }
  fs.forEach(function (f) {
    return f();
  }); //output expected: '0' to '9'
};
//# sourceMappingURL=let-keyword.js.map