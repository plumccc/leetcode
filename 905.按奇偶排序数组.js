/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 * 
 * https://leetcode.cn/problems/sort-array-by-parity/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2) {
      res.push(nums[i])
    } else {
      res.unshift(nums[i])
    }
  }

  return res;
};
// @lc code=end