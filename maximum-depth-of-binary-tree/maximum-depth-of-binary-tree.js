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
 * @return {number}
 */
var maxDepth = function(root) {
    var helper = (node) => {
        if (!node) {
            return 0;
        } else {
            return Math.max(1 + helper(node.left), 1 + helper(node.right));
        }
    }
    return helper(root);
};