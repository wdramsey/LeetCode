/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0;
    let temp = 0;
    let copy = prices.slice();
    let max = Math.max(...copy);
  
    if (prices.length === 0) {
      return 0;
    }
    for (let i = 0; i < copy.length; i++) {
      if (res < max - copy[i]) {
        max = Math.max(...copy.slice(i + 1))
        temp =  max - copy[i];
        if (temp > res) {
          res = temp;
        }
      }
    }
    return res;
};