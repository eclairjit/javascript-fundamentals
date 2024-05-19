const sampleString = "    hello bhondu   ";
const subString = "bhondu";
const anotherSubString = "butterscotch";
const anotherSampleString = "apple, banana, guava, orange";

sampleString.length;
// returns length of the string

sampleString.trim();
// removes any whitespace from both ends of the string;
// it doesn't change the original string but returns
// another string with changes made; here it'll return "hello bhondu"

sampleString.includes(subString);
// returns true if the substring is present in the string else false

sampleString.startsWith(subString);
// returns true if the substring is present at the start of the string else false

sampleString.endsWith(subString);
// returns true if the substring is present at the end of the string else false

sampleString.indexOf(subString);
// returns the index of the substring in the string and if not present, returns -1

sampleString.slice(startindex, endIndex);
// returns a substring which starts from startIndex and ends just before endIndex

sampleString.toLowerCase();
// self-explanatory

sampleString.toUpperCase();
// self-explanatory

sampleString.replace(subString, anotherSubString);
// replaces subString with anotherSubString; it doesn't change the original string
// but returns a new string with changes made; it changes only the first occurence

sampleString.replaceAll(subString, anotherSubString);
// same as replace() but changes all occurences of subString with anotherSubString

anotherSampleString.split(", ");
// splits the string into an array of substrings based on the separator passed,
// like in this case it'll return ["apple", "banana", "guava", "orange"]
