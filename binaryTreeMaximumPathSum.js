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
   * @return {number}
   */
  maxPathSum(root) {
    this.res = -Infinity;

    const dfs = (node) => {
      if (!node) {
        return 0;
      }

      let left = Math.max(0, dfs(node.left));
      let right = Math.max(0, dfs(node.right));

      this.res = Math.max(this.res, left + node.val + right);
      return node.val + Math.max(right, left);
    };

    dfs(root);
    return this.res;
  }
}
