const arr = [1, 2, 3, 4, 5];

// example
// all the three code snippets below do the same thing

const initialValue = 0;
arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, initialValue);

// reduce returns a single value and doesn't modify the original array
// value returned in all the above cases: 15
// it's not necessary to name the parameters accumulator and currentValue,
// they can be named anything
