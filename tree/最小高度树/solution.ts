/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums: number[]) {
  if( !nums.length ) return null
  const idx =  Math.floor( (nums.length ) / 2 );
  const val = nums[idx];

  let root = new TreeNode(val);
  root.left = sortedArrayToBST(nums.slice(0, idx));
  root.right = sortedArrayToBST(nums.slice(idx + 1));

 return root;
  
};
 function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


const tree =sortedArrayToBST([-10, -3, 0, 5, 9,10]);
console.log(tree)