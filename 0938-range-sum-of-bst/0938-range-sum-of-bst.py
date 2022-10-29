# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):

    def rangeSumBST(self, root, low, high):
        """
        :type root: TreeNode
        :type low: int
        :type high: int
        :rtype: int
        """
        self.result = 0

        def helper(root,low,high):

            if (root.val <= high and root.val >= low):
                self.result += root.val
            if (root.left != None): 
                helper(root.left, low, high)
            if (root.right != None): 
                helper(root.right, low, high)

            return self.result
        return helper(root,low,high)