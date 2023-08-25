/*
 * @lc app=leetcode.cn id=2634 lang=javascript
 *
 * [2634] 过滤数组中的元素
 * 
 * https://leetcode.cn/problems/filter-elements-from-array/
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  return arr.reduce((prev, cur, index) => {
      return fn(cur, index) ? [...prev, cur] : prev;
  }, []);
};