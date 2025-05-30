class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let node = this.root;

    for (let c of word) {
      if (!(c in node.children)) {
        node.children[c] = new TrieNode();
      }
      node = node.children[c];
    }
    node.endOfWord = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const dfs = (j, root) => {
      let node = root;

      for (let i = j; i < word.length; i++) {
        let c = word[i];

        if (c === ".") {
          for (let child of Object.values(node.children)) {
            if (dfs(i + 1, child)) {
              return true;
            }
          }
          return false;
        } else {
          if (!(c in node.children)) {
            return false;
          }
          node = node.children[c];
        }
      }
      return node.endOfWord;
    };

    return dfs(0, this.root);
  }
}
