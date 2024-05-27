/*
 * @lc app=leetcode.cn id=1576 lang=javascript
 *
 * [1576] 替换所有的问号
 * 
 * https://leetcode.cn/problems/replace-all-s-to-avoid-consecutive-repeating-characters/description/
 */

/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  const _s = s.split("");
  for (let i = 0; i < _s.length; i++) {
    if (s[i] === "?") {
      const prev = _s[i - 1];
      const next = _s[i + 1];
      for (let j = 0; j < 26; j++) {
        const code = String.fromCharCode(97 + j);
        if (code !== prev && code !== next) {
          _s[i] = code;
          break;
        }
      }
    }
  }
  return _s.join("");
};