exports.run = () => {
  let greet = (greeting, name) => {
    console.log(`${greeting}, ${name}`);
  }
  greet();
  greet("Hello", "Peter");

  greet = (greeting, name="Helton") => {
    console.log(`${greeting}, ${name}`);
  }
  greet();
  greet("Hello");

  greet = (greeting="Hello", name) => {
    console.log(`${greeting}, ${name}`);
  }
  greet();
  greet(null, "Bill");

  greet = (greeting="Hello", name="Helton") => {
    console.log(`${greeting}, ${name}`);
  }
  greet();


  let receive = (onComplete) => {
    onComplete();
  };
  receive(() => console.log("I'm done!"));

  receive = (onComplete = () => console.log("default function arg"))
    => onComplete(); //crazy!
  receive();
};
