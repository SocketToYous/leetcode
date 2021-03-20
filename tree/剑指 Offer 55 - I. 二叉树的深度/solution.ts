/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0; //没有值后  说明没有子节点

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

var test = {
  val: 5,
  right: {
    val: 10,
    right: null,
    left: { val: 9, right: null, left: null },
  },
  left: {
    val: -3,
    right: { val: 0, right: null, left: null },
    left: { val: -10, right: null, left: null },
  },
};

var a = maxDepth(test);
console.log(a);
