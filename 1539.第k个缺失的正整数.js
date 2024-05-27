/*
 * @lc app=leetcode.cn id=1539 lang=javascript
 *
 * [1539] 第k个缺失的正整数
 * 
 * https://leetcode.cn/problems/kth-missing-positive-number/description/
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  for (let i = 1; ; i++) {
    if (!arr.includes(i)) {
      if (k === 1) {
        return i;
      }
      k--;
    }
  }
};