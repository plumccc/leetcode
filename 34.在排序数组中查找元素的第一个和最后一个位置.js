/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 原生 api
  // return [nums.indexOf(target), nums.lastIndexOf(target)];
  
  let left = 0, right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((right + left) / 2)
    if (nums[mid] == target) {
      let l = mid, r = mid
      while (nums[l - 1] == target) l--
      while (nums[r + 1] == target) r++
      return [l, r]
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return [-1, -1]
};
// @lc code=end

