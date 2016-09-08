function addThreeThings(a, b, c) {
  let result = a + b + c;
  console.log(result);
}

exports.run = () => {
  console.log(...[1, 2, 3]);

  let first = [1, 2, 3];
  let second = [4, 5, 6];
  let arr = [];
  arr.push(first);
  arr.push(...second);
  console.log(arr);

  addThreeThings(...first);
  addThreeThings(...second);
}
