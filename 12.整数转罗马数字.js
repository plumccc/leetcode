/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let keyArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let valArr = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let res = ""
  for (let i = 0; i < keyArr.length; i++) {
    while(num >= keyArr[i]) {
      num -= keyArr[i]
      res += valArr[i]
    }
  }
  return res
};
// @lc code=end

