/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let temp;
    while(b) {
      temp = a & b;
      a ^= b;
      b = temp << 1;
  }
    return a;
};