/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  const findHeight = (node, height) => {
    if (!node) {
      return height;
    }
    let left = findHeight(node.left, height + 1);
    let right = findHeight(node.right, height + 1);
    if (left && right) {
      return Math.abs(left - right) <= 1 ? Math.max(left, right) : 0;
    }
    return 0;
  };
  return root ? findHeight(root, 0) : true;
};

