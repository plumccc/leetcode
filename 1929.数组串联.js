/*
 * @lc app=leetcode.cn id=1929 lang=javascript
 *
 * [1929] 数组串联
 * 
 * https://leetcode.cn/problems/concatenation-of-array/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
  return [...nums, ...nums]
};
// @lc code=end

