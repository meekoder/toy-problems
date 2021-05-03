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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
  let sum = 0;
  let maxLevel = -1;
  const traverse = (node, level) => {
    if (!node) return;
    if (!node.left && !node.right) {
      if (level === maxLevel) sum += node.val;
      if (level > maxLevel) {
        maxLevel = level;
        sum = node.val;
      }
    }
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  };
  traverse(root, 0);
  return sum;
};
