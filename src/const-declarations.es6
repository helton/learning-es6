/*
  In ES6 <const> is a constant reference, not a constant variable.
  The reference will be read-only, so you won't be able to assign
  another value to a const reference
*/

exports.run = () => {
  /*-----------------------------------------
    Syntax
   ----------------------------------------*/

  //Prior to ES6 we use <var>
  var value1 = 'hello world';
  value1 = 'foo bar';
  console.log('value1:', value1);

  //ES6 syntax: it won't allow us reassign to a const reference
  const value2 = 'hello world';
  //value2 = 'foo bar'; //error: "value" is read-only
  console.log('value2:', value2);

  //ES6 syntax: it allows to call methods that changes state
  //in a const reference (we're not breaking the rules!)
  const obj = {};
  obj.foo = 'bar'; //it's ok
  //obj = 'bar'; //error: "obj" is read-only
  console.log('foo:', obj.foo);

  /*-----------------------------------------
    Common uses
   ----------------------------------------*/

  //API keys
  const API_KEY = 'xxxxx';
  const API_SECRET = 'xxxxx';

  //Port number in a node application
  const port = 3000;

  //Math constants
  const PI = 3.14;

  /*-----------------------------------------
    Quirks
   ----------------------------------------*/

  //It's block scoped
  if (true) {
    const foo = 'bar';
    console.log(foo);
  }
  //console.log(foo);//error: "foo" is not defined

};
