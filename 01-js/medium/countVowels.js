/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

//function to check if it is vowels


function countVowels(str) {
  let str1 = str.toLowerCase();
  const vowelset = new Set( ['a','i','o','e','u']);
  let arr = str1.split('');
  let numvowels =0;
  arr.forEach(character => {
    if (vowelset.has(character)){
      numvowels++;
    }
  })

  return numvowels;
}

module.exports = countVowels; 