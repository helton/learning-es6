/*
   ES6 allows us to omit property names if their name matches the variable names
   We can also use syntax functionName() {} inside the object literal
*/
exports.run = () => {
  let color = 'red';
  let speed = 10;
  let go = () => console.log('vroom...');
  let drive = "goAnotherTime";

  let car = {
    color,
    speed,
    go,
    goAgain() {
      console.log('vroom again...');
    },
    [drive]: function () {
      console.log('vroooooooom another time...');
    }
  };
  console.log(car.color);
  console.log(car.speed);
  car.go();
  car.goAgain();
  car.goAnotherTime();
};
