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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    const traverse = (node, sum) => {
        if (!node) return false;
        sum -= node.val;
        if (sum === 0 && !node.left && !node.right) return true;
        return traverse(node.left, sum) || traverse(node.right, sum);
    };
    return traverse(root, targetSum);
};
