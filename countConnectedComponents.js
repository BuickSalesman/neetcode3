class Solution {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {number}
   */
  countComponents(n, edges) {
    let res = 0;
    let adj = Array.from({ length: n }, () => []);
    let visited = Array.from({ length: n }, () => false);

    for (const [a, b] of edges) {
      adj[a].push(b);
      adj[b].push(a);
    }

    const dfs = (node) => {
      for (let edge of adj[node]) {
        if (!visited[edge]) {
          visited[edge] = true;
          dfs(edge);
        }
      }
    };

    for (let node = 0; node < n; node++) {
      if (!visited[node]) {
        visited[node] = true;
        dfs(node);
        res++;
      }
    }

    return res;
  }
}
