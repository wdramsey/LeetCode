/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = [];
    res[0] = 1;
  //split into right parts and left parts
  //left
    for (let i = 1; i < nums.length; i++) {
      res[i] = res[i - 1] * nums[i - 1];
    }
    //right
    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
      res[i] *= right;
      right *= nums[i];
    }
    return res;
};