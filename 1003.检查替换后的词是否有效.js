/*
 * @lc app=leetcode.cn id=1003 lang=javascript
 *
 * [1003] 检查替换后的词是否有效
 *
 * https://leetcode.cn/problems/check-if-word-is-valid-after-substitutions/
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let t = "";

  for (let _s of s) {
    t += _s;

    if (t.length >= 3 && t.slice(t.length - 3) === "abc") {
      t = t.slice(0, t.length - 3);
    }
  }

  return !t;
};
// @lc code=end
