import "babel-polyfill";

exports.run = () => {

  function* greet() {
    console.log(`Generators are "lazy"`);
    yield "How";
    console.log(`I'm not called until the second next`);
    yield "are";
    console.log(`Call me before "you"`);
    yield "you?";
    console.log(`Called when "done"`);
  }

  let greeter = greet();
  //for..of loop
  for (let word of greeter) {
    console.log(word);
  }

  function* greet2() {
    let friendly = yield "How";
    friendly = yield friendly + "are";
    yield friendly + "you?";
  }

  console.log('===============');
  let greeter2 = greet2();
  console.log(greeter2.next("I won't do anything. It's a newborn generator").value);
  console.log(greeter2.next(' the heck ').value);
  console.log(greeter2.next(" silly ol'").value);

  function* graph() {
    let [x, y] = [0, 0];
    while (true) {
      yield { x:x, y:y };
      [x, y] = [x + 2, y + 1];
    }
  }

  let graphGenerator = graph();
  console.log(graphGenerator.next().value);
  console.log(graphGenerator.next().value);
  console.log(graphGenerator.next().value);
  console.log(graphGenerator.next().value);
  console.log(graphGenerator.next().value);
  console.log(graphGenerator.next().value);
  console.log(graphGenerator.next().value);

};
