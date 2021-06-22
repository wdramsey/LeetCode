/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let res = [];
    let temp;
    let count = 0;
    for (let i = 0; i <= n; i++) {
        temp = i.toString(2);
        for (let j = 0; j < temp.length; j++) {
            if (temp[j] === '1') {
                count++;
            }
        }
        res.push(count);
        count = 0;
    }
    return res;
};