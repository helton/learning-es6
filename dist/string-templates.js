"use strict";

var _templateObject = _taggedTemplateLiteral(["It's ", ", so I'm ", ""], ["It's ", ", so I'm ", ""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.run = function () {
  var salutation = "Hello";
  var greeting = salutation + ", World";
  console.log(greeting);

  var templatedGreeting = salutation + ", World";
  console.log(templatedGreeting);

  var place = "Earth";
  var multiLineGreeting = "\n    You\n      crazy\n        " + place + "\n        How\n      are\n    you?\n  ";
  console.log(multiLineGreeting);

  var x = 1;
  var y = 2;

  var equation = x + " + " + y + " = " + (x + y);
  console.log(equation);

  var tag = function tag(strings) {
    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }

    console.log(strings);
    console.log(values);
    values[1] = values[0] < 20 ? "awake" : "sleepy";
    return "" + strings[0] + values[0] + strings[1] + values[1];
  };

  var message = tag(_templateObject, new Date().getHours(), '');
  console.log(message);
};
//# sourceMappingURL=string-templates.js.map