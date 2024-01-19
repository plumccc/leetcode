/*
 * @lc app=leetcode.cn id=2965 lang=javascript
 *
 * [2965] 找出缺失和重复的数字
 * 
 * https://leetcode.cn/problems/find-missing-and-repeated-values/description/
 */

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  const map = new Map();
  for (let item of grid) {
    item.forEach(el => {
      map.set(el, map.has(el) ? map.get(el) + 1 : 1)
    });
  }

  const res = [];
  const n = grid.length;
  for (let i = 1; i <= n ** 2; i++) {
    if (map.get(i) == 2) {
      res[0] = i;
      continue;
    }
    if (!map.has(i)) {
      res[1] = i;
      continue;
    }
  }

  return res;
};