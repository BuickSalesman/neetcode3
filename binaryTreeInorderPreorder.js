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
   * @param {number[]} preorder
   * @param {number[]} inorder
   * @return {TreeNode}
   */
  buildTree(preorder, inorder) {
    let inorderIndices = {};
    this.preorderIndex = 0;

    for (let i = 0; i < inorder.length; i++) {
      inorderIndices[inorder[i]] = i;
    }

    const dfs = (l, r) => {
      if (l > r) {
        return null;
      }

      let nodeValue = preorder[this.preorderIndex];
      this.preorderIndex++;
      let node = new TreeNode(nodeValue);
      let mid = inorderIndices[nodeValue];
      node.left = dfs(l, mid - 1);
      node.right = dfs(mid + 1, r);
      return node;
    };

    return dfs(0, inorder.length - 1);
  }
}
