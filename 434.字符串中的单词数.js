/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  let i = 0, count = 0;
  s += " "
  while (i < s.length) {
    if (s[i] != " " && s[i + 1] == " ") count++
    i++
  }
  return count
};
// @lc code=end

