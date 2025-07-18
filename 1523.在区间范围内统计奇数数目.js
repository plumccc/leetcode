/*
 * @lc app=leetcode.cn id=1523 lang=javascript
 *
 * [1523] 在区间范围内统计奇数数目
 *
 * https://leetcode.cn/problems/count-odd-numbers-in-an-interval-range/description/
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  let count = Math.floor((high - low) / 2);

  if (low % 2 || high % 2) {
    count += 1;
  }

  return count;
};
// @lc code=end
