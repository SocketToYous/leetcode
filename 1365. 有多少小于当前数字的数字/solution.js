/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    if (nums.length <= 0) return []
    let littleArr = []
    let i = 0;
    for (const key in nums) {
        let arr = [];
        nums.filter(ele => {
            if (ele < nums[key]) {
                arr.push(ele)
            }
        })
        littleArr.push(arr.length)
    }

    return littleArr

};

let a =smallerNumbersThanCurrent([8, 1, 2, 2, 3])

// nums = [8, 1, 2, 2, 3]
// const n = nums.length;
// const data = new Array(n).fill(0).map(v => new Array(2).fill(0));
// for (let i = 0; i < n; ++i) {
//     data[i][0] = nums[i];
//     data[i][1] = i;
// }
// data.sort((a, b) => a[0] - b[0]);



console.log(a)

