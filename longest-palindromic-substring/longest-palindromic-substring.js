/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let copy = s.slice();
    let tempChar = ''; 
    let temp = '';
    let res = '';
    let repeatCharTest = true;
    let paliTest = true;
    let tempCount = 0;
    let sameTest = true;
    if (copy.length === 1) return copy[0];
    for (let i = 0; i < s.length; i++) {
      tempChar = s[i];
      copy = copy.slice(1);
      if (copy.includes(tempChar)) {
        repeatCharTest = false;
        break;
      }
    }
    if (repeatCharTest === true) {
      return s[0];
    }
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== s[0]) {
        sameTest = false;
      }
    }
    if (sameTest === true) return s;
  const helper = (index) => {
    for (let j = s.length; j > 0; j--) {
      temp = s.slice(index, j);
      paliTest = true;
       for (let i = 0; i < temp.length / 2 ; i++) {
        if (temp[i] !== temp[temp.length - 1 - i]) {
          paliTest = false;
          break;
        }
      }
      if (paliTest === true && temp.length > res.length) {
        res = temp.slice();
        break;
      }
    } 
    tempCount++;
    if (paliTest === false) {
      helper(tempCount);
    }
  }
    while (tempCount < s.length) {
      helper(tempCount);
    }
  if (paliTest === false) {
      return s[0];
    }
  return res;       
};