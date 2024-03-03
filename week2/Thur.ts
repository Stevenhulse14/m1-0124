/*
Palindrome Check > Problem
Prompt Given a random string, write a function that determines 
if that string is palindromic - meaning it is spelled the same 
way both forwards and backwards.

Other thoughts: Is an empty string palindromic?

EXAMPLE:
isPalindrome('racecar') // true
isPalindrome('fullstack') // false
isPalindrome('10101') // true
Challenge

For added complexity, how about a string that has white spaces
and other characters? Or varying upper and lower case?

Example:
isPalindrome('some men interpret nine memos') // true
isPalindrome('AbBa') // true

Using Methods and forloops
*/

function isPalindrome(str: string): boolean {
  return str === str.split("").reverse().join("");
}

function isPalindrome2(str) {
  let halfway = Math.floor(str.length / 2);
  for (let i = 0; i < halfway; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      // check if it's not palindromic, or move on
      return false;
    }
  }
  return true;
  // if it was never false by the time we got halfway, we are done.
}
console.log(isPalindrome("racecar"));
