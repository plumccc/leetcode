/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 * 
 * https://leetcode-cn.com/problems/repeated-substring-pattern/
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s = "abcabcabcabc") {
  const sLen = s.length, vaild = (child) => {
    const childLen = child.length;
    for (let i = childLen; i < sLen; i = i + childLen) {
      if (child !== s.substring(i, i + childLen)) {
        return false
      }
    }
    return true;
  }

  for (let i = 1; i < sLen; i++) {
    if (sLen % i != 0) continue;
    const child = s.substring(0, i);
    const isChild = vaild(child, s);
    if (isChild) {
      return true
    }
  }
  return false;
};
// @lc code=end

