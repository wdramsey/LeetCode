/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
     var temp = '';
    var res = '';
    temp = x.toString();
    for (let i = temp.length - 1; i >= 0; i --) {
      if (temp[i] !== '-') {
        res += temp[i];
      } else {
        res = '-' + res.slice();
      }
    }
    if (Number(res) < Math.pow(-2, 31) || Number(res) > Math.pow(2, 31) - 1) return 0;
    return Number(res);
};