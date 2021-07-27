/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
//     let res = 0;
//     let temp = 0;
//     let max = Math.max(...prices);
  
//     if (prices.length === 0) {
//       return 0;
//     }
//     for (let i = 0; i < prices.length; i++) {
//       if (res < max - prices[i]) {
//         if (prices.indexOf(max) < i) {
//           max = Math.max(...prices.slice(i + 1));
//         }
//         temp =  max - prices[i];
//         if (temp > res) {
//           res = temp;
//         }
//       }
//     }
//     return res;
    let res = 0;
    let min  = prices[0];
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        res = Math.max(res, prices[i] - min);
    }
    return res;
};