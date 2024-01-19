/*
 * @lc app=leetcode.cn id=2810 lang=javascript
 *
 * [2810] 故障键盘
 * 
 * https://leetcode.cn/problems/faulty-keyboard/
 */

/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
  const res = [];

  for (const item of s) {
    if (item === 'i') {
      res.reverse();
      continue;
    }
    res.push(item);
  }

  return res.join('');
};