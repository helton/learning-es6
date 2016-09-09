exports.run = () => {
  let salutation = "Hello";
  let greeting = salutation + ", World";
  console.log(greeting);

  let templatedGreeting = `${salutation}, World`;
  console.log(templatedGreeting);

  let place = "Earth";
  let multiLineGreeting = `
    You
      crazy
        ${place}
        How
      are
    you?
  `
  console.log(multiLineGreeting);

  let [x, y] = [1, 2];
  let equation = `${x} + ${y} = ${x + y}`;
  console.log(equation);

  let tag = (strings, ...values) => {
    console.log(strings);
    console.log(values);
    values[1] = values[0] < 20 ? "awake" : "sleepy";
    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
  }

  let message = tag`It's ${new Date().getHours()}, so I'm ${''}`;
  console.log(message);
};
