/*
 * @lc app=leetcode.cn id=2496 lang=javascript
 *
 * [2496] 数组中字符串的最大值
 * 
 * https://leetcode.cn/problems/maximum-value-of-a-string-in-an-array/
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  let maxLen = 0;
  for (const str of strs) {
    const len = !isNaN(+str) ? +str : str.length;
    maxLen = Math.max(maxLen, len);
  }
  return maxLen;
};
// @lc code=end

