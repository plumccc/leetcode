/*
 * @lc app=leetcode.cn id=1518 lang=javascript
 *
 * [1518] 换水问题
 * 
 * https://leetcode.cn/problems/water-bottles/description/
 */

// @lc code=start
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let res = numBottles;

  while (numBottles >= numExchange) {
    const exchangeBottles = Math.floor(numBottles / numExchange);
    res += exchangeBottles;
    numBottles = exchangeBottles + numBottles % numExchange;
  }

  return res;
};
// @lc code=end

