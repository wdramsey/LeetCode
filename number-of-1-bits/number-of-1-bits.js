/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let temp = n.toString(2);
    let res = temp.split(1);
    return res.length - 1;
};