/*
 * @lc app=leetcode.cn id=2724 lang=javascript
 *
 * [2724] 排序方式
 * 
 * https://leetcode.cn/problems/sort-by/
 */

// @lc code=start
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};