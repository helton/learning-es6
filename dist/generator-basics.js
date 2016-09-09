"use strict";

require("babel-polyfill");

exports.run = function () {
  var _marked = [greet, greet2, graph].map(regeneratorRuntime.mark);

  function greet() {
    return regeneratorRuntime.wrap(function greet$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("Generators are \"lazy\"");
            _context.next = 3;
            return "How";

          case 3:
            console.log("I'm not called until the second next");
            _context.next = 6;
            return "are";

          case 6:
            console.log("Call me before \"you\"");
            _context.next = 9;
            return "you?";

          case 9:
            console.log("Called when \"done\"");

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _marked[0], this);
  }

  var greeter = greet();
  //for..of loop
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = greeter[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var word = _step.value;

      console.log(word);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  function greet2() {
    var friendly;
    return regeneratorRuntime.wrap(function greet2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return "How";

          case 2:
            friendly = _context2.sent;
            _context2.next = 5;
            return friendly + "are";

          case 5:
            friendly = _context2.sent;
            _context2.next = 8;
            return friendly + "you?";

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _marked[1], this);
  }

  console.log('===============');
  var greeter2 = greet2();
  console.log(greeter2.next("I won't do anything. It's a newborn generator").value);
  console.log(greeter2.next(' the heck ').value);
  console.log(greeter2.next(" silly ol'").value);

  function graph() {
    var x, y, _ref;

    return regeneratorRuntime.wrap(function graph$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            x = 0;
            y = 0;

          case 2:
            if (!true) {
              _context3.next = 10;
              break;
            }

            _context3.next = 5;
            return { x: x, y: y };

          case 5:
            _ref = [x + 2, y + 1];
            x = _ref[0];
            y = _ref[1];
            _context3.next = 2;
            break;

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _marked[2], this);
  }

  var graphGenerator = graph();
  console.log(graphGenerator.next().value);
  console.log(graphGenerator.next().value);
  console.log(graphGenerator.next().value);
  console.log(graphGenerator.next().value);
  console.log(graphGenerator.next().value);
  console.log(graphGenerator.next().value);
  console.log(graphGenerator.next().value);
};
//# sourceMappingURL=generator-basics.js.map