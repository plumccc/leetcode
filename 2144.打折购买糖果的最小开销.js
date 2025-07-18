/*
 * @lc app=leetcode.cn id=2144 lang=javascript
 *
 * [2144] 打折购买糖果的最小开销
 * 
 * https://leetcode.cn/problems/minimum-cost-of-buying-candies-with-discount/description/
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
  const _cost = cost.sort((a, b) => b - a);
  let result = 0, i = 0;

  while (i < _cost.length) {
    result += (_cost[i] || 0) + (_cost[i + 1] || 0);
    i += 3;
  }

  return result;
};

