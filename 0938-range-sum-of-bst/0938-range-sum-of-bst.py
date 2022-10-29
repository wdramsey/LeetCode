/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    var result = 0
    var helper = (root,low,high) => {

        if (root.val >= low && root.val <= high) {
            result += root.val;
        }
        if (root.left !== null) helper(root.left, low, high);
        if (root.right !== null) helper(root.right, low, high);
        return result
    }
    return helper(root,low,high);
};