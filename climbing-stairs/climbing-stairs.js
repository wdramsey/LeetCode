/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const cache = {};
    return climb(0, cache, n);
}
var climb = (step, cache, last) => {
    if (step in cache) {
        return cache[step];
    } else {
        if (step > last) return 0;
        if (step === last) {
            return 1;
        } else {
            cache[step] = climb(step + 1, cache, last) + climb(step + 2, cache, last);
        }
        return cache[step];
    }
};