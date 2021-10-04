/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const table0 = Array(nums.length + 1).fill(0);
    const table1 = Array(nums.length + 1).fill(0);
    table0[1] = nums[0];
    table1[2] = nums[1];
    for (let i = 1; i < nums.length; i++) {
        var val = nums[i];
        if (i < nums.length - 1) {
            table0[i + 1] = Math.max(table0[i], table0[i - 1] + val);
        } else {
            table0[i + 1] = Math.max(table0[i], table0[i - 1]);
        }

    }
    for (let j = 2; j < nums.length; j++) {
        var val = nums[j];
        table1[j + 1] = Math.max(table1[j], table1[j - 1] + val);

    }
    return Math.max(table0[nums.length], table1[nums.length]);
};