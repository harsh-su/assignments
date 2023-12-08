/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/


function isPalindrome(str) {
  let str1 = str.replace(/\s/g, '').toLowerCase();
  let arr = str1.split('');
  let l = arr.length;
  for (let i=0;i<l/2;i++){
    if (arr[i]!=arr[l-i-1]){
      
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
