'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
   ES6 allows us to omit property names if their name matches the variable names
   We can also use syntax functionName() {} inside the object literal
*/
exports.run = function () {
  var color = 'red';
  var speed = 10;
  var go = function go() {
    return console.log('vroom...');
  };
  var drive = "goAnotherTime";

  var car = _defineProperty({
    color: color,
    speed: speed,
    go: go,
    goAgain: function goAgain() {
      console.log('vroom again...');
    }
  }, drive, function () {
    console.log('vroooooooom another time...');
  });
  console.log(car.color);
  console.log(car.speed);
  car.go();
  car.goAgain();
  car.goAnotherTime();
};
//# sourceMappingURL=object-enhancements.js.map