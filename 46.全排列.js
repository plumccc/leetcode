/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let numArr = []
  const find = (arr = []) => {
    if (arr.length == nums.length) {
      numArr.push(arr)
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (arr.includes(nums[i])) continue;
      find([...arr, nums[i]])
    }
  }
  find()
  return numArr
};
// @lc code=end

