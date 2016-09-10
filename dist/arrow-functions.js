"use strict";

exports.run = function () {
  var createGreeting = function createGreeting(message, name) {
    return message + ", " + name;
  };
  var arrowGreeting = function arrowGreeting(message, name) {
    return message + ", " + name;
  };
  console.log(createGreeting("Hello", "Helton"));
  console.log(arrowGreeting("Hello", "Helton"));

  var echo = function echo(message) {
    return message;
  };
  console.log(echo("bat"));

  var square = function square(x) {
    return x * x;
  };
  console.log(square(2));

  var deliveryBoy = {
    name: "John",

    handleMessage: function handleMessage(message, handler) {
      handler(message);
    },

    receive: function receive() {
      var that = this;
      //console.log(JSON.stringify(that));

      this.handleMessage("Hello", function (message) {
        console.log(message + ", " + that.name);
      });
    }
  };
  deliveryBoy.receive();

  deliveryBoy = {
    name: "John",

    handleMessage: function handleMessage(message, handler) {
      return handler(message);
    },

    receive: function receive() {
      var _this = this;

      this.handleMessage("Hello", function (message) {
        return console.log(message + ", " + _this.name);
      });
    }

  };
  deliveryBoy.receive();
};
//# sourceMappingURL=arrow-functions.js.map