class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }

  sayName() {
    console.log('Hi, I am a', this.name + '.');
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }
}

let s = new Square(3);
s.sayName();
console.log('Area =', s.area);
console.log(`${1 + 1}`);
