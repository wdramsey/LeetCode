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
 * @return {number[][]}
 */
var levelOrder = function(root) { //BFS tree
    if (!root) return [];
    const queue = [root];
    const results = [];
    while (queue.length !== 0) {
        const size = queue.length;
        const currentLevel = [];
        for (let i = 0; i < size; i ++) {
            const currentNode = queue.shift(); //queue with 0th index removed
            
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
            currentLevel.push(currentNode.val);
        }
        results.push(currentLevel);
    }
    return results;
};

//  if (!root) return [];
//     const queue = [root];
//     const results = [];
//     while (queue.length !== 0) {
//         const size = queue.length;
//         const currentLevel = [];
//         for (let i = 0; i < size; i ++) {
//             console.log('queuebefore',queue)
//             const currentNode = queue.shift(); //queue with 0th index removed
//             console.log('currentnode',currentNode)
            
//             if (currentNode.left) {
//                 queue.push(currentNode.left);
//                 console.log('left',queue)
//             }
//             if (currentNode.right) {
//                 queue.push(currentNode.right);
//                 console.log('right',queue)
//             }
//             console.log('afterright', queue)
//             currentLevel.push(currentNode.val);
//             console.log('node', currentNode)
//             console.log('val',currentNode.val);
//             console.log('level',currentLevel)
//         }
//         results.push(currentLevel);
//     }
//     return results;