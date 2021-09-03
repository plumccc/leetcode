/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

  /** 原生 api */
  // return haystack.indexOf(needle)

  /** 循环截取判断 */
  if (!needle) return 0;

  const len1 = haystack.length
  const len2 = needle.length
  for (let i = 0; i < len1; i++) {
    const str = haystack.slice(i, i + len2)
    if (str == needle) return i
  }
  return -1
};
// @lc code=end

