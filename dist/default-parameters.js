"use strict";

exports.run = function () {
  var greet = function greet(greeting, name) {
    console.log(greeting + ", " + name);
  };
  greet();
  greet("Hello", "Peter");

  greet = function greet(greeting) {
    var name = arguments.length <= 1 || arguments[1] === undefined ? "Helton" : arguments[1];

    console.log(greeting + ", " + name);
  };
  greet();
  greet("Hello");

  greet = function greet() {
    var greeting = arguments.length <= 0 || arguments[0] === undefined ? "Hello" : arguments[0];
    var name = arguments[1];

    console.log(greeting + ", " + name);
  };
  greet();
  greet(null, "Bill");

  greet = function greet() {
    var greeting = arguments.length <= 0 || arguments[0] === undefined ? "Hello" : arguments[0];
    var name = arguments.length <= 1 || arguments[1] === undefined ? "Helton" : arguments[1];

    console.log(greeting + ", " + name);
  };
  greet();

  var receive = function receive(onComplete) {
    onComplete();
  };
  receive(function () {
    return console.log("I'm done!");
  });

  var defaultOnComplete = function defaultOnComplete() {
    return console.log("default function arg");
  };
  receive = function receive() {
    var onComplete = arguments.length <= 0 || arguments[0] === undefined ? defaultOnComplete : arguments[0];
    return onComplete();
  }; //crazy!
  receive();
};
//# sourceMappingURL=default-parameters.js.map