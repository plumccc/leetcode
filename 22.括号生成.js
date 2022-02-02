/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 * 
 * https://leetcode-cn.com/problems/generate-parentheses/
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = []
  const dfs = (cur, left, right) => {
    if (cur.length === 2 * n) {
      res.push(cur)
      return;
    }
    if (left < n) {
      dfs(cur + '(', left + 1, right)
    }
    if (right < left) {
      dfs(cur + ')', left, right + 1)
    }
  }
  dfs('', 0, 0)
  return res
};
// @lc code=end

