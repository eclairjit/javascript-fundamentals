const arr = [1, 2, 3, 4, 5];

// example
// all the three code snippets below do the same thing

const evenNumbers1 = arr.filter((num) => num % 2 === 0);

const evenNumbers2 = arr.filter((num) => num % 2 === 0);

const evenNumbers3 = arr.filter((num) => {
  return num % 2 === 0;
});

// filter returns a new array and doesn't modify the original array
// array returned in all the above cases: [2, 4]
