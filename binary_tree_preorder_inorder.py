# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        inorder_indices = {}
        self.preorder_index = 0

        for i, n in enumerate(inorder):
            inorder_indices[n] = i

        def dfs(l, r):
            if l > r:
                return None

            nodeval = preorder[self.preorder_index]
            self.preorder_index += 1
            node = TreeNode(nodeval)
            mid = inorder_indices[nodeval]
            node.left = dfs(l, mid - 1)
            node.right = dfs(mid + 1, r)
            return node

        return dfs(0, len(inorder) - 1)
