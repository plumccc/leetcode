/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 * 
 * https://leetcode-cn.com/problems/string-to-integer-atoi/
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  const num = parseInt(s) || 0
  if (num < (-Math.pow(2, 31))) {
    return -Math.pow(2, 31)
  }
  if (num > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1
  }
  return num
};
// @lc code=end

