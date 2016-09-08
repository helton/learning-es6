exports.run = () => {
  let firstName = 'Helton';
  let lastName = 'Souza';

  let person = {firstName, lastName}
  console.log(person);

  let mascot = 'Moose';
  let team = {person, mascot};
  console.log(team);
};
