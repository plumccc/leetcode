/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 * 
 * https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  /** 暴力循环 */
  if (s == words.join('')) return [0]

  const isMatch = (str, ws, len) => {
    for (let i = 0; i < str.length; i = i + len) {
      const w = str.substring(i, i + len)
      const wIndex = ws.indexOf(w)
      if (wIndex !== -1) {
        ws.splice(wIndex, 1)
      } else {
        return false
      }
    }
    return ws.length === 0
  }

  const wsLen = words.length
  const wLen = words[0].length
  let res = []

  for (let i = 0; i < s.length; i++) {
    const subStr = s.substring(i, i + (wsLen * wLen))
    isMatch(subStr, [...words], wLen) && res.push(i)
  }
  return res
};
// @lc code=end

