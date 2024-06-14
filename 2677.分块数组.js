/*
 * @lc app=leetcode.cn id=2677 lang=javascript
 *
 * [2677] 分块数组
 * 
 * https://leetcode.cn/problems/chunk-array/description/
 */

// @lc code=start
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  return arr.reduce((prev, cur, index) => {
    const _index = Math.ceil((index + 1) / size) - 1;
    if (!prev?.[_index]) {
      prev[_index] = [];
    }
    prev[_index].push(cur);
    return prev;
  }, [])
};
// @lc code=end