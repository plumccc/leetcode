/*
 * @lc app=leetcode.cn id=2399 lang=javascript
 *
 * [2399] 检查相同字母间的距离
 * 
 * https://leetcode.cn/problems/check-distances-between-same-letters/description/
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      continue;
    }

    let item = s[i];

    if (item !== s[distance[item.charCodeAt() - 97] + i + 1]) {
      return false;
    }

    map.set(s[i], true);
  }

  return true;
};
// @lc code=end