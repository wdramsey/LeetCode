/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     var res = false; //true if there is a copy
//     for (let i = 0; i < nums.length; i ++) {
//       if (nums.slice(i + 1).includes(nums[i])) {
//         res = true;
//       }
//     }
//     return res;
// };


// var containsDuplicate = function(nums) {
//     return new Set(nums).size < nums.length;
// };

var containsDuplicate = function(nums) {
   var obj = {};
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        if( obj[nums[i]] > 1) return true;
    }
    return false;
};