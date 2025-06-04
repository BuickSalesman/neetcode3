/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
  /**
   * @param {Node} node
   * @return {Node}
   */
  cloneGraph(node) {
    let clones = new Map();

    const dfs = (node) => {
      if (clones.has(node)) {
        return clones.get(node);
      }

      let copy = new Node(node.val);
      clones.set(node, copy);
      for (let neighbor of node.neighbors) {
        copy.neighbors.push(dfs(neighbor));
      }
      return copy;
    };

    return node ? dfs(node) : null;
  }
}
