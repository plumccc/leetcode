/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 * 
 * https://leetcode-cn.com/problems/number-of-1-bits/
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0
  while (n) {
    n &= n - 1
    count++;
  }
  return count
};
// @lc code=end

