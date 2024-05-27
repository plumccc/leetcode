/*
 * @lc app=leetcode.cn id=1566 lang=javascript
 *
 * [1566] 重复至少 K 次且长度为 M 的模式
 * 
 * https://leetcode.cn/problems/detect-pattern-of-length-m-repeated-k-or-more-times/description/
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function (arr, m, k) {
  let i = 0;
  while (i + m - 1 < arr.length) {
    let count = 1, j = i + m;
    const cur = arr.slice(i, j).join(" ");
    while (j <= arr.length - m) {
      const next = arr.slice(j, j + m).join(" ");
      if (cur == next) {
        j += m;
        count += 1;
        if (count >= k) {
          return true;
        }
      } else {
        break;
      }
    }
    i++;
  }
  return false;
};
// @lc code=end

