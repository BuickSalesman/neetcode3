# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Codec:

    # Encodes a tree to a single string.
    def serialize(self, root: Optional[TreeNode]) -> str:
        self.res = ""

        def dfs(node):
            if not node:
                self.res += "N"
                return

            self.res += str(node.val) + "#"
            dfs(node.left)
            dfs(node.right)
            return self.res

        dfs(root)
        return self.res

        # Decodes your encoded data to tree.

    def deserialize(self, data: str) -> Optional[TreeNode]:
        self.il = 0
        self.ir = 0
        self.data = data

        def dfs():
            if data[self.ir] == "N":
                self.il += 1
                self.ir += 1
                return None

            while self.data[self.ir] != "#":
                self.ir += 1

            node = TreeNode(int(data[self.il:self.ir]))
            self.ir += 1
            self.il = self.ir
            node.left = dfs()
            node.right = dfs()
            return node

        return dfs()
