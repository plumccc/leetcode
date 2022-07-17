/*
 * @lc app=leetcode.cn id=1704 lang=javascript
 *
 * [1704] 判断字符串的两半是否相似
 * 
 * https://leetcode.cn/problems/determine-if-string-halves-are-alike/
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const letter = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const sLen = s.length;
  const halfLen = sLen / 2;
  const a = s.slice(0, halfLen);
  const b = s.slice(halfLen);
  let aCount = 0;
  let bCount = 0;
  for (let i = 0; i < halfLen; i++) {
    if (letter.includes(a[i])) aCount++;

    if (letter.includes(b[i])) bCount++;
  }
  return aCount === bCount;
};
// @lc code=end
