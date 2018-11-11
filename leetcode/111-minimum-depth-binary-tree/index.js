/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function minNodeDepth(node) {
  if (!node) return 0

  const leftMin = minNodeDepth(node.left)
  const rightMin = minNodeDepth(node.right)

  if (leftMin === 0) return rightMin + 1
  if (rightMin === 0) return leftMin + 1
  return Math.min(leftMin, rightMin) + 1
}

var minDepth = function(root) {
  return minNodeDepth(root)
}

module.exports = minDepth
