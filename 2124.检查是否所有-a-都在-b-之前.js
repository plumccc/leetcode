/*
 * @lc app=leetcode.cn id=2124 lang=javascript
 *
 * [2124] 检查是否所有 A 都在 B 之前
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 * 
 * https://leetcode.cn/problems/check-if-all-as-appears-before-all-bs/
 */
var checkString = function (s) {
  // const lastAIndex = s.lastIndexOf('a');
  // for (let i = 0; i <= lastAIndex; i++) {
  //   if (s[i] === 'b') return false
  // }
  // return true;
  
  return !s.includes('ba');
};
// @lc code=end

