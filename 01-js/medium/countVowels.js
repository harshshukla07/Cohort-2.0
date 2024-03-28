/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let ans = 0;
    var temp = str.toLowerCase();
    for (let i=0; i<temp.length; i++) {
      if (temp.charAt(i) == 'a' || temp.charAt(i) == 'e' || temp.charAt(i) == 'i' || temp.charAt(i) == 'o' || temp.charAt(i) == 'u'){
        ans++;
      }
    }

    return ans;
}

module.exports = countVowels;