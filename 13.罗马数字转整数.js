/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 * 
 * https://leetcode-cn.com/problems/roman-to-integer/
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let sMap = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
  }

  let i = 0
  let num = 0
  while(i < s.length) {
    let judgeStr = s[i] + s[i + 1]
    if (sMap[judgeStr]) {
      num += sMap[judgeStr]
      i += 2
    } else {
      num += sMap[s[i]]
      i += 1
    }
  }
  return num
};
// @lc code=end

