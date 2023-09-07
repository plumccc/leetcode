/*
 * @lc app=leetcode.cn id=2404 lang=javascript
 *
 * [2404] 出现最频繁的偶数元素
 * 
 * https://leetcode.cn/problems/most-frequent-even-element/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  let res = -1;
  let map = new Map();
  for (let n of nums) {
    if (!(n % 2)) {
      const nNum = (map.get(n) || 0) + 1;
      const resNum = map.get(res) || 0;
      map.set(n, nNum);
      if (nNum > resNum || (nNum == resNum && n < res)) {
        res = n;
      }
    }
  }
  return res;
};
// @lc code=end