/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0
  while (i < nums.length) {
    if (nums[i] == val) {
      nums.splice(i, 1)
    } else {
      i++
    }
  }
  return nums.length
};
// @lc code=end

