'use strict';

/*
  In ES6 <const> is a constant reference, not a constant variable.
  The reference will be read-only, so you won't be able to assign
  another value to a const reference
*/

exports.run = function () {
  /*-----------------------------------------
    Syntax
   ----------------------------------------*/

  //Prior to ES6 we use <var>
  var value1 = 'hello world';
  value1 = 'foo bar';
  console.log('value1:', value1);

  //ES6 syntax: it won't allow us reassign to a const reference
  var value2 = 'hello world';
  //value2 = 'foo bar'; //error: "value" is read-only
  console.log('value2:', value2);

  //ES6 syntax: it allows to call methods that changes state
  //in a const reference (we're not breaking the rules!)
  var obj = {};
  obj.foo = 'bar'; //it's ok
  //obj = 'bar'; //error: "obj" is read-only
  console.log('foo:', obj.foo);

  /*-----------------------------------------
    Common uses
   ----------------------------------------*/

  //API keys
  var API_KEY = 'xxxxx';
  var API_SECRET = 'xxxxx';

  //Port number in a node application
  var port = 3000;

  //Math constants
  var PI = 3.14;

  /*-----------------------------------------
    Quirks
   ----------------------------------------*/

  //It's block scoped
  if (true) {
    var foo = 'bar';
    console.log(foo);
  }
  //console.log(foo);//error: "foo" is not defined
};
//# sourceMappingURL=const-declarations.js.map