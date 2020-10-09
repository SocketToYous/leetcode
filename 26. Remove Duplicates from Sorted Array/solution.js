/**
 * @param {number[]} nums
 * @return {number}
 */

 /**
  * 
  * 作为两个数组比较，相同则删除数组中重复的数据
  * 运行时间较长，内存消耗一般
  */
var removeDuplicates = function (nums) {
    if (nums.length == 1) {
        return 1
    } else {
        for (let i = nums.length - 1; i >= 0; i--) {
            for (let j = nums.length - 2; j >= 0; j--) {
                if (i != j && nums[i] == nums[j]) {
                    nums.splice(j, 1)
                }
            }
        }
    }
    return nums.length
};

/**
 * 
 * 一个数组，使用指针移动比较数据，重复数据添加到数组中，最后获取指针位置
 * 运行时间少，消耗内存少
 */
var removeDuplicates2 = function (nums) {
    if (nums.length == 0) return 0;
    var i = 0;
    for (var j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};
/**
 * 
 * 一个数组，使用指针移动比较数据，同时删除重复数据，最后获取数组长度
 * 运行时间较少，消耗内存高
 */
var removeDuplicates3 = function (nums) {
    if (nums.length == 0) return 0;
    var i = nums.length - 2;
    for (let j = nums.length - 1; j > 0; j--) {
        if (nums[j] == nums[i]) {
            nums.splice(i, 1)
        }
        i--;
    }
    return nums.length;
}
