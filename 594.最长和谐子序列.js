/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 * 
 * https://leetcode.cn/problems/longest-harmonious-subsequence/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  let res = 0;
  for (const [key, count] of map.entries()) {
    const nextKey = key + 1;
    if (map.has(nextKey)) {
      res = Math.max(res, count + map.get(nextKey))
    }
  }

  return res;
};

