# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        self.res = root.val
        self.index = 0
        self.k = k

        def dfs(node):
            if not node:
                return

            dfs(node.left)
            self.index += 1
            if self.index == self.k:
                self.res = node.val
                return
            dfs(node.right)

        dfs(root)
        return self.res
