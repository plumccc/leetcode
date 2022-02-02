/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 * 
 * https://leetcode-cn.com/problems/regular-expression-matching/
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let r = new RegExp(`^${p}$`)
  return r.test(s)
};
// @lc code=end

