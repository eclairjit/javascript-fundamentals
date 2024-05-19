const arr = [1, 2, 3, 4, 5];

// example
// all the three code snippets below do the same thing

const newArray1 = arr.map((num) => num + 5);

const newArray2 = arr.map((num) => num + 5);

const newArray3 = arr.map((num) => {
  return num + 5;
});

// map returns a new array and doesn't modify the original array
// array returned in all the above cases: [6, 7, 8, 9, 10]
