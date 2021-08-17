/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let sLen = s.length
  if (!sLen || sLen === 1) return sLen
  let i = 0
  let j = 1
  let len = 0
  let str = s[i]
  while(i < sLen - 1) {
    if (str.includes(s[j]) || j === sLen) {
      len = Math.max(str.length, len)
      i ++
      j = i + 1
      str = s[i]
    } else {
      str += s[j]
      j ++
    }
  }
  return len
};
// @lc code=end

