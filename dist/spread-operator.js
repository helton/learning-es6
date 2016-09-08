"use strict";

function addThreeThings(a, b, c) {
  var result = a + b + c;
  console.log(result);
}

exports.run = function () {
  var _console;

  (_console = console).log.apply(_console, [1, 2, 3]);

  var first = [1, 2, 3];
  var second = [4, 5, 6];
  var arr = [];
  arr.push(first);
  arr.push.apply(arr, second);
  console.log(arr);

  addThreeThings.apply(undefined, first);
  addThreeThings.apply(undefined, second);
};
//# sourceMappingURL=spread-operator.js.map