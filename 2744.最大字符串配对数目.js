/*
 * @lc app=leetcode.cn id=2744 lang=javascript
 *
 * [2744] 最大字符串配对数目
 * 
 * https://leetcode.cn/problems/find-maximum-number-of-string-pairs/description/
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  const map = new Map();
  let count = 0;

  for (const word of words) {
    const _word = word.split('').reverse().join('');
    if (map.has(_word)) {
      count++;
      continue;
    }
    map.set(word, true);
  }

  return count;
};
// @lc code=end