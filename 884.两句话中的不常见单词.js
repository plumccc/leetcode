/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 * 
 * https://leetcode.cn/problems/uncommon-words-from-two-sentences/description/
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const handleCountMap = (list) => {
    return list.reduce((prev, cur) => prev.set(cur, (prev.get(cur) || 0) + 1), new Map())
  };

  const s1Map = handleCountMap(s1.split(' '));
  const s2Map = handleCountMap(s2.split(' '));
  const res = [];

  for (let [key, count] of s1Map.entries()) {
    if (count == 1 && !s2Map.has(key)) {
      res.push(key);
    }
  }

  for (let [key, count] of s2Map.entries()) {
    if (count == 1 && !s1Map.has(key)) {
      res.push(key);
    }
  }

  return res;
};
