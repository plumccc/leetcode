/*
 * @lc app=leetcode.cn id=2635 lang=javascript
 *
 * [2635] 转换数组中的每个元素
 * 
 * https://leetcode.cn/problems/apply-transform-over-each-element-in-array/
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  return arr.reduce((prev, cur, index) => {
      prev.push(fn(cur, index));
      return prev;
  }, []);
};
// @lc code=end