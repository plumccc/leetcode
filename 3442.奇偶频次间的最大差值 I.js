/*
 * @lc app=leetcode.cn id=3442 lang=javascript
 *
 * [3442] 奇偶频次间的最大差值 I
 *
 * https://leetcode.cn/problems/maximum-difference-between-even-and-odd-frequency-i/description/
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
  const countMap = new Map();

  for (const _s of s) {
    countMap.set(_s, (countMap.get(_s) || 0) + 1);
  }

  let maxOdd = 0, minEven = s.length;

  countMap.values().forEach((c) => {
    if (c % 2) {
      maxOdd = Math.max(maxOdd, c);
    } else {
      minEven = Math.min(minEven, c);
    }
  });

  return maxOdd - minEven;
};
// @lc code=end
