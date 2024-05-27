/*
 * @lc app=leetcode.cn id=1732 lang=javascript
 *
 * [1732] 找到最高海拔
 * 
 * https://leetcode.cn/problems/find-the-highest-altitude/description/
 */

// @lc code=start
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let res = 0, next = 0;
  for (let i of gain) {
    next += i;
    if (next > res) {
      res = next;
    }
  }
  return res;
};
// @lc code=end

