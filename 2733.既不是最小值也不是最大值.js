/*
 * @lc app=leetcode.cn id=2733 lang=javascript
 *
 * [2733] 既不是最小值也不是最大值
 * 
 * https://leetcode.cn/problems/neither-minimum-nor-maximum/description/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  const numsLen = nums.length;
  if (numsLen <= 2) return -1;
  nums.sort((a, b) => a - b);
  return nums[Math.floor(numsLen / 2)]
};
// @lc code=end