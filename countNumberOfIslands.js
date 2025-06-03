class Solution {
  /**
   * @param {character[][]} grid
   * @return {number}
   */
  numIslands(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let islands = 0;

    function dfs(r, c) {
      if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === "0") {
        return false;
      }

      grid[r][c] = "0";
      dfs(r + 1, c);
      dfs(r - 1, c);
      dfs(r, c + 1);
      dfs(r, c - 1);
      return true;
    }
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (dfs(r, c)) {
          islands++;
        }
      }
    }

    return islands;
  }
}
