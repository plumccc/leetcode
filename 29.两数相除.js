/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let dir = 1
  if (dividend < 0) {
    dir = -dir
  }

  if (divisor < 0) {
    dir = -dir
  }

  const div = (num_1, num_2) => {
    if (num_1 < num_2) return 0
    let count = 1
    let temp = num_2
    while ((temp + temp) <= num_1) {
      count = count + count
      temp = temp + temp
    }
    return count + div(num_1 - temp, num_2)
  }

  let times = div(Math.abs(dividend), Math.abs(divisor))
  times = dir > 0 ? times : -times

  if (times > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1
  }

  if (times < Math.pow(-2, 31)) {
    return Math.pow(-2, 31)
  }
  return times
}
// @lc code=end

