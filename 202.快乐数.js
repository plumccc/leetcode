/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 * 
 * https://leetcode.cn/problems/happy-number/
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let map = new Map();

  while (n !== 1) {
    if (map.get(n)) return false;

    map.set(n, 1);

    n = n.toString().split('').reduce((prev, cur) => prev + cur * cur, 0);
  };

  return true;
};
// @lc code=end

