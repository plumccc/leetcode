/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 * 
 * https://leetcode-cn.com/problems/reverse-integer/
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let newX = parseInt(x.toString().split("").reverse().join(""));
  
  if (x < 0) {
    newX *= -1
  }

  if(((-2)**31) > newX || (2**31-1) < newX) {
    newX = 0
  }

  return newX
};
// @lc code=end

