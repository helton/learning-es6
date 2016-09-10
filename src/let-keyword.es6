exports.run = () => {
  //var is function scoped
  //=> it's like you declare all your variables at the top of the function
  var varMessage = 'hi';
  {
    var varMessage = 'bye';
  }
  console.log(varMessage);

  //let is block scoped
  let letMessage = 'hi';
  {
    let letMessage = 'bye';
  }
  console.log(letMessage);

  //the 'i' is not block scoped, it'll change every iteration
  var fs = [];
  for (var i = 0; i < 10; i++) {
    fs.push(() => console.log(i));
  }
  fs.forEach(f => f()); //output unexpected: all '10'

  //the 'i' is block scoped, it'll create a brand new one at every iteration
  fs = [];
  for (let i = 0; i < 10; i++) {
    fs.push(() => console.log(i));
  }
  fs.forEach(f => f()); //output expected: '0' to '9'
}
