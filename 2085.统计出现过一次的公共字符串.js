/*
 * @lc app=leetcode.cn id=2085 lang=javascript
 *
 * [2085] 统计出现过一次的公共字符串
 * 
 * https://leetcode.cn/problems/count-common-words-with-one-occurrence/description
 */

// @lc code=start
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  const words1Map = handleWordsMap(words1);
  const words2Map = handleWordsMap(words2);
  let count = 0;

  for (let [key, value] of words1Map.entries()) {
    if (words2Map.get(key) === 1 && value === 1) {
      count++;
    }
  }

  return count;
};

var handleWordsMap = function (words) {
  const map = new Map();
  for (const word of words) {
    map.set(word, (map.get(word) || 0) + 1)
  }
  return map;
};
// @lc code=end