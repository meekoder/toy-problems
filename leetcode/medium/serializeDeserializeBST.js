/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return '';
  let result = '';
  result += root.val + ',';
  result += serialize(root.left) + ',';
  result += serialize(root.right);
  return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

var deserialize = function(data) {
  const split = data.split(',');
  const makeTree = (arr) => {
    const val = arr.shift();
    if (!val) return null;
    let root = new TreeNode(val);
    root.left = makeTree(arr);
    root.right = makeTree(arr);
    return root;
  };
  return makeTree(split)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
