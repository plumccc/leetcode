/*
 * @lc app=leetcode.cn id=1124 lang=javascript
 *
 * [1124] 表现良好的最长时间段
 * 
 * https://leetcode.cn/problems/longest-well-performing-interval/
 */

// @lc code=start
/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  // 暴力解法
  let max = 0;
  for (let l = 0; l < hours.length; l++) {
    let r = l;
    let count = 0;
    while (r < hours.length) {
      if (hours[r] > 8) {
        count++;
      } else {
        count--;
      }
      if (count > 0) {
        max = Math.max(max, r - l + 1)
      }
      r++;
    }
  }
  return max;
};
// @lc code=end

