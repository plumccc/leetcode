/*
 * @lc app=leetcode.cn id=2626 lang=javascript
 *
 * [2626] 数组归约运算
 * 
 * https://leetcode.cn/problems/array-reduce-transformation/description/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let res = init;
  for (let num of nums) {
    res = fn(res, num)
  }
  return res;
};
// @lc code=end