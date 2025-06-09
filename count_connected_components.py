class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        adj = [[] for node in range(n)]
        visit = [False] * n
        res = 0

        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)

        def dfs(node):
            for edge in adj[node]:
                if not visit[edge]:
                    visit[edge] = True
                    dfs(edge)

        for node in range(n):
            if not visit[node]:
                visit[node] = True
                dfs(node)
                res += 1

        return res
