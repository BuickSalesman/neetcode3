# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:

        lb, ub = float("-inf"), float("inf")
        return self.dfs(root, lb, ub)

    def dfs(self, root, lb, ub):
        if not root:
            return True

        if (root.val < ub and root.val > lb):
            return self.dfs(root.left, lb, root.val) and self.dfs(root.right, root.val, ub)
        else:
            return False
