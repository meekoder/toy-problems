/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
  let ref;
  const traverse = (og, copy) => {
    if (!og && !copy) return;
    if (og === target) {
      ref = copy;
    }
    if (!ref) {
      traverse(og.left, copy.left);
      traverse(og.right, copy.right);
    }
    return ref;
  };
  return traverse(original, cloned);
};
