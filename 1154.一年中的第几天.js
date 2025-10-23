/*
 * @lc app=leetcode.cn id=1154 lang=javascript
 *
 * [1154] 一年中的第几天
 *
 * https://leetcode.cn/problems/day-of-the-year/
 */

// @lc code=start
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  const [year, month, day] = date.split('-');
  let result = +day;

  for (let m = 1; m < +month; m++) {
    switch (m) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        result += 31;
        break;

      case 2:
        result += ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? 29 : 28;
        break;

      case 4:
      case 6:
      case 9:
      case 11:
        result += 30;
        break;
    }
  }

  return result;
};
// @lc code=end
