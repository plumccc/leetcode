/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  if (!s) return 0

  let stack = [{ bracket: "", index: 0 }]
  let count = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] == ")" && (stack.length && stack[stack.length - 1].bracket == "(")) {
      stack.pop()
    } else {
      stack.push({ bracket: s[i], index: i + 1 })
    }
  }

  stack.push({ bracket: "", index: s.length + 1 })
  for (let j = 0; j < stack.length - 1; j++) {
    count = Math.max(count, stack[j + 1].index - stack[j].index - 1)
  }
  return count
};
// @lc code=end

