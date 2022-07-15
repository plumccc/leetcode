/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 * 
 * https://leetcode.cn/problems/buddy-strings/
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  const sLen = s.length;
  const goalLen = goal.length;

  if (sLen !== goalLen) return false;

  if ([...new Set(s)].length < sLen && s === goal) return true

  const diffIndexArr = [];
  for (let i = 0; i < sLen; i++) {
    s[i] !== goal[i] && diffIndexArr.push(i)
  }

  if (diffIndexArr.length === 2) {
    const [firstIndex, lastIndex] = diffIndexArr;
    return s[firstIndex] === goal[lastIndex] && s[lastIndex] === goal[firstIndex]
  } else {
    return false
  }
};
// @lc code=end

