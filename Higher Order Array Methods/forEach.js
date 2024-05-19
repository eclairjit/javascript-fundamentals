const arr = ["apple", "orange", "banana", "guava"];

// syntax

arr.forEach(/* callback function */);

// using the function keyword

arr.forEach(function () {
  // function definition
});

// using arrow function

arr.forEach(() => {
  // function definition
});

// forEach passes three arguments to the callback function,
// these are the value of each item in the array, the index
// and the array itself

arr.forEach((value, index, array) => {
  console.log(`${value} is at index ${index} `);
  console.log(array);
});

// it is not necessary to use all three arguments all the time,
// you may use any number of them; the only thing to keep in mind
// is that the first argument will always be value, the second index
// and the third array, no matter what the parameter names are in the
// function declaration
