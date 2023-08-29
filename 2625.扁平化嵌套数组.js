/*
 * @lc app=leetcode.cn id=2625 lang=javascript
 *
 * [2625] 扁平化嵌套数组
 * 
 * https://leetcode.cn/problems/flatten-deeply-nested-array/
 */
// @lc code=start
/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  if (n === 0) return arr;

  return arr.reduce((prev, cur) => {
    prev.push(...(Array.isArray(cur) ? flat(cur, n - 1) : [cur]));
    return prev;
  }, []);
};