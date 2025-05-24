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

class Solution {
  /**
   * @param {TreeNode} root
   * @param {number} k
   * @return {number}
   */
  kthSmallest(root, k) {
    this.res = root.val;
    this.k = k;
    this.index = 0;

    const dfs = (node) => {
      if (!node) {
        return;
      }

      dfs(node.left);
      this.index++;
      if (this.index === this.k) {
        this.res = node.val;
        return;
      }
      dfs(node.right);
    };

    dfs(root);
    return this.res;
  }
}
