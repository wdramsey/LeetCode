/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var res = false; //true if there is a copy
    for (let i = 0; i < nums.length; i ++) {
      if (nums.slice(i + 1).includes(nums[i])) {
        res = true;
      }
    }
    return res;
};