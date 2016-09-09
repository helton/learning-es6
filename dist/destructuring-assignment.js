"use strict";

exports.run = function () {
  var _color$name$state$pos = {
    color: "red",
    name: "John",
    state: "New York",
    position: "Forward"
  };
  var color = _color$name$state$pos.color;
  var position = _color$name$state$pos.position;

  console.log(color);
  console.log(position);

  function generateObj() {
    return {
      color: "red",
      name: "John",
      state: "New York",
      position: "Forward"
    };
  }

  var _generateObj = generateObj();

  var firstName = _generateObj.name;
  var location = _generateObj.state;

  console.log(firstName);
  console.log(location);

  var _ref = ['red', 'yellow', 'green', 'blue', 'orange'];
  var first = _ref[0];
  var fifth = _ref[4];

  console.log(first);
  console.log(fifth);

  var people = [{
    "firstName": "Clinton",
    "lastName": "Ruiz",
    "phone": "111-111",
    "email": "ruiz.clinton@email.com"
  }, {
    "firstName": "Skyler",
    "lastName": "Carroll",
    "phone": "222-222",
    "email": "carroll.skyler@email.com"
  }, {
    "firstName": "Kylynn",
    "lastName": "Madden",
    "phone": "333-333",
    "email": "madden.kylynn@email.com"
  }, {
    "firstName": "Chaney",
    "lastName": "Edwards",
    "phone": "444-444",
    "email": "edwards.chaney@email.com"
  }];

  people.forEach(function (_ref2) {
    var firstName = _ref2.firstName;
    return console.log('#', firstName);
  });

  function logEmail(_ref3) {
    var email = _ref3.email;

    console.log(email);
  }

  var Skyler = people[1];

  logEmail(Skyler);
};
//# sourceMappingURL=destructuring-assignment.js.map