/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    if (nums.length == 0) return 0;
    let sum = 0;
    let sumArray = [];
    for (let i in nums) {
        sum += nums[i];
        sumArray.push(sum)
    }
    return sumArray;
};

var runningSum2 = function (nums) {
    if (nums.length == 0) return 0;

    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1]
    }
    return nums;
};

let a = runningSum2([1,2,3,4])
console.log(a)