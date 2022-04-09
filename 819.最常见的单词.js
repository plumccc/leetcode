/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 * 
 * https://leetcode-cn.com/problems/most-common-word/
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const strObj = {}, paraArr = paragraph.replace(/,|\.|!|\?|;|'/g, ' ').split(' ');
  let max = "";
  for (let i = 0; i < paraArr.length; i++) {
    const para = paraArr[i].toLocaleLowerCase();
    if (para && !banned.includes(para)) {
      if (!strObj[para]) {
        strObj[para] = 0
      }
      strObj[para] += 1;
      if (max) {
        max = strObj[max] > strObj[para] ? max : para;
      } else {
        max = para;
      }
    }
  }
  return max;
};
// @lc code=end

