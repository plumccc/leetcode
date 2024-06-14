/*
 * @lc app=leetcode.cn id=LCP 06 lang=javascript
 *
 * [LCP 06] 拿硬币
 * 
 * https://leetcode.cn/problems/na-ying-bi/description
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function (coins) {
  return coins.reduce((prev, cur) => prev += Math.ceil(cur / 2), 0);
};
// @lc code=end