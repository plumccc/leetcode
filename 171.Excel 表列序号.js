/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 *
 * https://leetcode.cn/problems/excel-sheet-column-number/
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  return columnTitle
    .split("")
    .reverse()
    .reduce((prev, cur, index) => {
      const code = cur.charCodeAt() - 64;
      if (!!index) {
        prev += code * Math.pow(26, index);
      } else {
        prev += code;
      }
      return prev;
    }, 0);
};
// @lc code=end
