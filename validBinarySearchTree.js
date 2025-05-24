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
   * @return {boolean}
   */
  isValidBST(root) {
    let lb = -Infinity;
    let ub = Infinity;
    const dfs = (root, lb, ub) => {
      if (!root) {
        return true;
      }

      if (root.val > lb && root.val < ub) {
        return dfs(root.left, lb, root.val) && dfs(root.right, root.val, ub);
      } else {
        return false;
      }
    };

    return dfs(root, lb, ub);
  }
}
