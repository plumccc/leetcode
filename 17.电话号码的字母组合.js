/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return []

  const letterMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }

  let res = letterMap[digits[0]]

  const combin = (s1, s2) => {
    let r = []
    for (let i of s1) {
      for (let j of s2) {
        r.push(i + j)
      }
    }
    return r
  }

  for (let i = 1; i < digits.length; i++) {
    res = combin(res, letterMap[digits[i]])
  }

  return res
};
// @lc code=end

