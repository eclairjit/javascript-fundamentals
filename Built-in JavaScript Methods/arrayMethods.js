const sampleArray = [1, 2, 3, 4, 5];
const num = 6;

sampleArray.push(num);
// adds num to the end of the array

sampleArray.pop();
// removes the last element of the array

sampleArray.includes(num);
// returns true if the array contains num, false otherwise

sampleArray.indexOf(num);
// returns the index of num in the array, -1 if not found

// spread operator

const marvelHeroes = ["Ironman", "Hulk", "Thor"];
const dcHeroes = ["Superman", "Batman", "Flash"];

const allHeroes = [...marvelHeroes, ...dcHeroes];
// allHeroes = ["Ironman", "Hulk", "Thor", "Superman", "Batman", "Flash"]
