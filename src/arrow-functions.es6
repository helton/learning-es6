exports.run = () => {
  let createGreeting = function(message, name) {
    return `${message}, ${name}`;
  }
  let arrowGreeting = (message, name) => `${message}, ${name}`;
  console.log(createGreeting("Hello", "Helton"));
  console.log(arrowGreeting("Hello", "Helton"));

  let echo = message => message;
  console.log(echo("bat"));

  let square = x => x * x;
  console.log(square(2));

  let deliveryBoy = {
    name: "John",

    handleMessage: function (message, handler) {
      handler(message);
    },

    receive: function() {
      let that = this;
      //console.log(JSON.stringify(that));

      this.handleMessage("Hello", function (message) {
        console.log(`${message}, ${that.name}`);
      })
    }
  }
  deliveryBoy.receive();

  deliveryBoy = {
    name: "John",

    handleMessage: (message, handler) => handler(message),

    receive: function () {
      this.handleMessage("Hello",
        (message) => console.log(`${message}, ${this.name}`));
    }

  }
  deliveryBoy.receive();

};
