/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 * 
 * https://leetcode-cn.com/problems/is-subsequence/
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // 双指针
  let i = 0, j = 0;
  while (j < t.length) {
    if (s[i] == t[j]) {
      i++
    }
    j++
  }
  return s.length == i
};
// @lc code=end

