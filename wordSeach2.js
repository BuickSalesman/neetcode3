class TrieNode {
  constructor() {
    this.children = {};
    this.index = -1;
  }
}

class Solution {
  /**
   * @param {character[][]} board
   * @param {string[]} words
   * @return {string[]}
   */
  findWords(board, words) {
    let root = new TrieNode();

    for (let i = 0; i < words.length; i++) {
      let node = root;

      for (const c of words[i]) {
        if (!(c in node.children)) {
          node.children[c] = new TrieNode();
        }
        node = node.children[c];
      }
      node.index = i;
    }

    this.words = words;
    this.res = [];

    let rows = board.length;
    let cols = board[0].length;

    const dfs = (r, c, node) => {
      if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] === "#" || !(board[r][c] in node.children)) {
        return;
      }

      let temp = board[r][c];
      node = node.children[temp];
      if (node.index !== -1) {
        this.res.push(this.words[node.index]);
        node.index = -1;
      }
      board[r][c] = "#";

      dfs(r + 1, c, node);
      dfs(r - 1, c, node);
      dfs(r, c + 1, node);
      dfs(r, c - 1, node);

      board[r][c] = temp;
    };

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        dfs(r, c, root);
      }
    }

    return this.res;
  }
}
