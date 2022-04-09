/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 * 
 * https://leetcode-cn.com/problems/longest-common-prefix/
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) return ''
  if (strs.length == 1) return strs[0]
  let res = ""
  let str1 = strs[0]
  strs.splice(0, 1)
  for (let i = 0; i < str1.length; i++) {
    if(strs.every(el => el[i] === str1[i])) {
      res += str1[i]
    } else {
      return res
    }
  }
  return res
};
// @lc code=end

