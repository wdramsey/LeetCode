/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let res = '';
  let temp = s.slice();
  let ans = ''; 

  if (temp.length === 0) {
    return 0;
  }
  if(temp.length === 1) {
    ans += temp[0];
  }
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === ' ' && !res.includes(' ')) {
      res += ' ';
      break;
    }
    if(!res.includes(temp[i])) {
      res += temp[i];
    } else if (res.length > ans.length){
      ans = res.slice();
      res = '';
      i -= ans.length;
    } else {
      i -= res.length;
      res = '';
    } 
  }
   if (res.length > ans.length) {
      ans = res.slice();
    } 
  return ans.length;
};