/*
 * @lc app=leetcode.cn id=1015 lang=javascript
 *
 * [1015] 可被 K 整除的最小整数
 * 
 * https://leetcode.cn/problems/smallest-integer-divisible-by-k/
 */

// @lc code=start
/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function (k) {
  if (k % 2 === 0 || k % 5 === 0) return -1;
  let cnt = 1;
  let curNum = 1;
  while (curNum % k != 0) {
    cnt++;
    curNum = (curNum % k) * 10 + 1;
  }
  return cnt;
};
// @lc code=end

