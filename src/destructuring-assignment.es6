exports.run = () => {
  let {color, position} = {
    color: "red",
    name: "John",
    state: "New York",
    position: "Forward"
  };
  console.log(color);
  console.log(position);

  function generateObj() {
    return {
      color: "red",
      name: "John",
      state: "New York",
      position: "Forward"
    }
  }

  let {name:firstName, state:location} = generateObj();
  console.log(firstName);
  console.log(location);

  let [first,,,,fifth] = ['red', 'yellow', 'green', 'blue', 'orange'];
  console.log(first);
  console.log(fifth);

  let people = [
    {
      "firstName": "Clinton",
      "lastName": "Ruiz",
      "phone": "111-111",
      "email": "ruiz.clinton@email.com"
    },
    {
      "firstName": "Skyler",
      "lastName": "Carroll",
      "phone": "222-222",
      "email": "carroll.skyler@email.com"
    },
    {
      "firstName": "Kylynn",
      "lastName": "Madden",
      "phone": "333-333",
      "email": "madden.kylynn@email.com"
    },
    {
      "firstName": "Chaney",
      "lastName": "Edwards",
      "phone": "444-444",
      "email": "edwards.chaney@email.com"
    }
  ];

  people.forEach(({firstName}) => console.log('#', firstName));

  function logEmail({email}) {
    console.log(email);
  }

  let [,Skyler] = people;
  logEmail(Skyler);

};
