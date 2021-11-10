/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    const table = Array(nums.length + 1).fill(0);
    table[1] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        var val = nums[i];
        table[i + 1] = Math.max(table[i], val + table[i - 1]);
    }
    return table[table.length - 1];
}