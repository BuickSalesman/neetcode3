class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class PrefixTree {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
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
    let node = this.root;

    for (let c of word) {
      if (!(c in node.children)) {
        return false;
      }
      node = node.children[c];
    }
    return node.endOfWord;
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let node = this.root;

    for (let c of prefix) {
      if (!(c in node.children)) {
        return false;
      }
      node = node.children[c];
    }
    return true;
  }
}
