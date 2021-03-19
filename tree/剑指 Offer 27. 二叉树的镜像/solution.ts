/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  if (root) {
    [root.left, root.right] = [root.right, root.left];
    if (root.left) {
      mirrorTree(root.left);
    }
    if (root.right) {
      mirrorTree(root.right);
    }
  }

  return root;

  console.log(root);
  console.log('--------------');
  mirrorTree(root.left);
  mirrorTree(root.right);
};

var aa = {
  val: 4,
  right: {
    val: 7,
    right: { val: 3, right: null, left: null },
    left: { val: 6, right: null, left: null },
  },
  left: {
    val: 2,
    right: { val: 3, right: null, left: null },
    left: { val: 1, right: null, left: null },
  },
};

var b = mirrorTree(aa);
console.log('************');
console.log(b);
