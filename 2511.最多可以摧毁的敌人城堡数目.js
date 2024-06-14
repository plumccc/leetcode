/*
 * @lc app=leetcode.cn id=2511 lang=javascript
 *
 * [2511] 最多可以摧毁的敌人城堡数目
 * 
 * https://leetcode.cn/problems/maximum-enemy-forts-that-can-be-captured/
 */

// @lc code=start
/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function (forts) {
  let i = 0;
  let j = 0;
  let max = 0;

  while (j < forts.length) {
    const forts_i = forts[i];
    const forts_j = forts[j];

    if (forts_i * forts_j == -1) {
      const _max = j - i - 1;
      max = Math.max(max, _max);
    }

    if (forts_j == 1 || forts_j == -1) {
      i = j;
    }

    j++;
  }

  return max;
};
// @lc code=end