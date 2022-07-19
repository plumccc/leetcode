/*
 * @lc app=leetcode.cn id=1507 lang=javascript
 *
 * [1507] 转变日期格式
 */

// @lc code=start
/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
  const monthMap = {
    "Jan": '01',
    "Feb": '02',
    "Mar": '03',
    "Apr": '04',
    "May": '05',
    "Jun": '06',
    "Jul": '07',
    "Aug": '08',
    "Sep": '09',
    "Oct": '10',
    "Nov": '11',
    "Dec": '12'
  }
  const [d, m, y] = date.split(' ');
  let day = d.replace(/[^0-9]/ig, "");
  return `${y}-${monthMap[m]}-${+day < 10 ? 0 + day : day}`
};
// @lc code=end

