/*
 * @lc app=leetcode.cn id=466 lang=javascript
 *
 * [466] 统计重复个数
 * 
 * https://leetcode.cn/problems/count-the-repetitions/description/
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function (s1, n1, s2, n2) {
  let i = 0, j = 0, counts = 0;
  const s1Len = s1.length;
  const s2Len = s2.length;
  const fullS1Len = s1.length * n1;

  while (i < fullS1Len) {
    const s1Item = s1[i % s1Len];

    if (s1Item === s2[j]) {
      j++;
      if (j == s2Len) {
        counts++;
        j = 0;
      }
    }

    i++;

    if (!j && !(i % s1Len)) {
      const times = Math.floor(fullS1Len / i);
      counts = counts * times;
      i = times * i;
    }
  }

  return Math.floor(counts / n2);
};
// @lc code=end

