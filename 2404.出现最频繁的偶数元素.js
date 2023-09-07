/*
 * @lc app=leetcode.cn id=2240 lang=javascript
 *
 * [2240] 买钢笔和铅笔的方案数
 * 
 * https://leetcode.cn/problems/number-of-ways-to-buy-pens-and-pencils/
 */
// @lc code=start
/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function (total, cost1, cost2) {
  let nums = 0;
  let cost1Nums = 0;

  while (cost1Nums * cost1 <= total) {
    nums += Math.floor((total - cost1Nums * cost1) / cost2) + 1;
    cost1Nums++;
  }

  return nums;
};
// @lc code=end