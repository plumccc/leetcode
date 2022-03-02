/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 * 
 * https://leetcode-cn.com/problems/keyboard-row/
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const isALine = function (str) {
    const keyWord = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    const lowerStr = str.toLowerCase()
    for (let i = 0; i < keyWord.length; i++) {
      if (keyWord[i].includes(lowerStr[0])) {
        return [].every.bind(lowerStr)(el => keyWord[i].includes(el))
      } else {
        continue;
      }
    }

  }
  return words.filter(el => isALine(el))
};
// @lc code=end

