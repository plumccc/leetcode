/*
 * @lc app=leetcode.cn id=2784 lang=javascript
 *
 * [2784] 检查数组是否是好的
 * 
 * https://leetcode.cn/problems/check-if-array-is-good/description/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
  nums.sort((a, b) => a - b);
  const lastNumIndex = nums.length - 1;
  const maxNum = nums[lastNumIndex];

  if (maxNum !== lastNumIndex) return false;

  for (let i = 0; i < lastNumIndex; i++) {
    if (i + 1 !== nums[i]) {
      return false;
    }
  }

  return true;
};
// @lc code=end