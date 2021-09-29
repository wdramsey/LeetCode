/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const table = Array(n+1).fill(1);
    for (let i = 2; i < table.length; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }
    return table[n];
};