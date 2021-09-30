/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
      const cache = {}; 
    if (n === 0) return 0;
    if (n === 1 || m === 1) return 1;
    var helper = (m, n) => {
        if(`${m},${n}` in cache) {
            return cache[`${m},${n}`];
        } else {
            if (m === 2 && n === 2) {
                return 2;
            } 
            if (n === 2) return m;
            if (m === 2) return n;
            else {
                cache[`${m},${n}`] = helper(m, n-1) + helper(m-1,n);
            }
        }
        return cache[`${m},${n}`];
    }
    return helper(m,n);
};