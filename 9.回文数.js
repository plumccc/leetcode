/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 * 
 * https://leetcode-cn.com/problems/palindrome-number/
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const str = x.toString()
  let firstIndex = 0;
  let lastIndex = str.length - 1
  while(firstIndex < lastIndex) {
    if (str[firstIndex] == str[lastIndex]) {
      firstIndex ++
      lastIndex --
    } else {
      return false
    }
  }
  return true
};
// @lc code=end

