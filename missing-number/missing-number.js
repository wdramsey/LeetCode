/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let range = nums.length;
    for (let i = 0; i <= nums.length; i++) {
        if (!nums.includes(range)) {
            return range;
        } else range--;
    }
};