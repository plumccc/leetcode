/*
 * @lc app=leetcode.cn id=2696 lang=javascript
 *
 * [2696] 删除子串后的字符串最小长度
 * 
 * https://leetcode.cn/problems/minimum-string-length-after-removing-substrings/description/
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  const queue = [];

  for (const ss of s) {
    const compose = queue[queue.length - 1] + ss;
    if (['AB', 'CD'].includes(compose)) {
      queue.pop();
    } else {
      queue.push(ss);
    }
  }

  return queue.length;
};
// @lc code=end