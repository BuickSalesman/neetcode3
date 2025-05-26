/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Codec {
  /**
   * Encodes a tree to a single string.
   *
   * @param {TreeNode} root
   * @return {string}
   */
  serialize(root) {
    this.res = "";

    const dfs = (node) => {
      if (!node) {
        this.res += "N";
        return;
      }

      this.res += node.val.toString() + "#";
      dfs(node.left);
      dfs(node.right);
      return;
    };

    dfs(root);
    return this.res;
  }

  /**
   * Decodes your encoded data to tree.
   *
   * @param {string} data
   * @return {TreeNode}
   */
  deserialize(data) {
    this.il = 0;
    this.ir = 0;
    this.data = data;

    const dfs = () => {
      if (this.data[this.ir] === "N") {
        this.ir++;
        this.il++;
        return null;
      }

      while (this.data[this.ir] !== "#") {
        this.ir++;
      }

      let node = new TreeNode(parseInt(this.data.slice(this.il, this.ir)));
      this.ir++;
      this.il = this.ir;
      node.left = dfs();
      node.right = dfs();
      return node;
    };

    return dfs();
  }
}
