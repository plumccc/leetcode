/*
 * @lc app=leetcode.cn id=2722 lang=javascript
 *
 * [2722] 根据 ID 合并两个数组
 * 
 * https://leetcode.cn/problems/join-two-arrays-by-id/description/
 */

// @lc code=start
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const map = new Map();

  arr1.concat(arr2).forEach(item => map.set(item.id, map.has(item.id) ? { ...map.get(item.id), ...item } : item));

  return Array.from(map.values()).sort((a, b) => a.id - b.id);
};
// @lc code=end

