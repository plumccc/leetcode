/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 * 
 * https://leetcode.cn/problems/top-k-frequent-elements/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  const _map = Array.from(map).sort((a, b) => b[1] - a[1]);
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(_map[i][0])
  }
  return result;
};
// @lc code=end

