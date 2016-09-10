"use strict";
var __moduleName = (void 0);
var Polygon = function Polygon(height, width) {
  this.name = 'Polygon';
  this.height = height;
  this.width = width;
};
($traceurRuntime.createClass)(Polygon, {sayName: function() {
    console.log('Hi, I am a', this.name + '.');
  }}, {});
var Square = function Square(length) {
  $traceurRuntime.superCall(this, $Square.prototype, "constructor", [length, length]);
  this.name = 'Square';
};
var $Square = Square;
($traceurRuntime.createClass)(Square, {get area() {
    return this.height * this.width;
  }}, {}, Polygon);
var s = new Square(3);
s.sayName();
console.log('Area =', s.area);
console.log(("" + (1 + 1)));
