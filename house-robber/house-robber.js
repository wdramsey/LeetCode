/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
   if (nums.length == 0) return 0;
    let prev1 = 0;
    let prev2 = 0;
    let temp;
    for (let i = 0; i < nums.length; i++) {
        tmp = prev1;
        prev1 = Math.max(prev2 + nums[i], prev1);
        prev2 = tmp;
    }
    return prev1;
};