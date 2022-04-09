/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 * 
 * https://leetcode-cn.com/problems/next-permutation/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--
  }
  if (i >= 0) {
    let j = nums.length - 1 // 求 i 右边第一个大于 nums[i] 的值，i 右边比如是单减的
    while (j >= 0 && nums[j] <= nums[i]) {
      j--
    }
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  let left = i + 1
  let right = nums.length - 1
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]]
    left++
    right--
  }
};
// @lc code=end

