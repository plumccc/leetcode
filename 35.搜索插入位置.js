/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  /** 二分查找 */
  let l = 0, r = nums.length - 1
  while (l <= r) {
    const mid = Math.round((l + r) / 2)
    if(nums[mid] == target) {
      return mid
    } else if (nums[mid] > target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return l

  /** 插入 --> 排序 --> 找target元素 */
  // nums.push(target)
  // nums.sort((a, b) => a - b)
  // return nums.indexOf(target)
};
// @lc code=end

