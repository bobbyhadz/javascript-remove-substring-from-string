// EXAMPLE 1 - Remove a Substring from a String in JavaScript

const str = 'one,one,two';

// ✅ Remove first occurrence of substring from string
const removeFirst = str.replace('one', '');
console.log(removeFirst); // 👉️ ",one,two"

// ✅ Remove all occurrences of substring from string
const removeAll = str.replaceAll('one', '');
console.log(removeAll); // 👉️ ",,two"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Remove all occurrences of a Substring from a String in JavaScript

// const str = 'one,one,two';

// const removeAll = str.replaceAll('one', '');
// console.log(removeAll); // 👉️ ",,two"

// ------------------------------------------------------------------

// // EXAMPLE 3 - Remove a substring from a string using a regular expression

// const str = 'one,one,two';

// // ✅ Remove first occurrence using regex
// const removeRegex = str.replace(/[0-9]/, '');
// console.log(removeRegex); // 👉️ "23,one,two"

// // ✅ Remove all occurrences using regex
// const removeRegexAll = str.replace(/[0-9]/g, '');
// console.log(removeRegexAll); // 👉️ ",one,two"

// ------------------------------------------------------------------

// // EXAMPLE 4 - Remove a substring from a string using `String.slice()`

// const str = 'one,two,three';

// const newStr = str.slice(0, 3) + str.slice(7);
// console.log(newStr); // 👉️ one,three

// ------------------------------------------------------------------

// // EXAMPLE 5 - Remove all occurrences of a Substring from a String using `str.split()`

// const str = 'one,one,two';

// const result = str.split('one').join('');

// console.log(result); // 👉️ ",,two"
