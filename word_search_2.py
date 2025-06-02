class TrieNode:
    def __init__(self):
        self.children = {}
        self.index = -1


class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        self.words = words
        self.res = []

        root = TrieNode()

        for i in range(len(words)):
            node = root
            for c in words[i]:
                if c not in node.children:
                    node.children[c] = TrieNode()
                node = node.children[c]
            node.index = i

        rows = len(board)
        cols = len(board[0])

        def dfs(r, c, node):
            if r < 0 or c < 0 or r >= rows or c >= cols or board[r][c] == "#" or board[r][c] not in node.children:
                return

            temp = board[r][c]
            node = node.children[temp]
            board[r][c] = "#"

            if node.index != -1:
                self.res.append(self.words[node.index])
                node.index = -1

            dfs(r + 1, c, node)
            dfs(r - 1, c, node)
            dfs(r, c + 1, node)
            dfs(r, c - 1, node)

            board[r][c] = temp

        for r in range(rows):
            for c in range(cols):
                dfs(r, c, root)

        return self.res
