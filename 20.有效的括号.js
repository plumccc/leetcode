/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 * 
 * https://leetcode-cn.com/problems/valid-parentheses/
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let sObj = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (sObj[stack[stack.length - 1]] == s[i]) {
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }
  return stack.length === 0
};
// @lc code=end

