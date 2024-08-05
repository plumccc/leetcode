/*
 * @lc app=leetcode.cn id=2544 lang=javascript
 *
 * [2544] 交替数字和
 * 
 * https://leetcode.cn/problems/alternating-digit-sum/
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
  return n.toString().split('').reduce((prev, cur, index) => {
    if (!(index % 2)) {
      prev += +cur;
    } else {
      prev -= +cur;
    }
    return prev;
  }, 0);
};
// @lc code=end

