/*
 * @lc app=leetcode.cn id=779 lang=javascript
 *
 * [779] 第K个语法符号
 * 
 * https://leetcode.cn/problems/k-th-symbol-in-grammar/
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  // n行第k个值是n-1行k/2演变来的
  // k为奇数直接返回， 偶数取反返回
  if (n == 1) return 0;

  const _k = Math.ceil(k / 2);

  const last = kthGrammar(n - 1, _k);

  if (k % 2) {
    return last;
  } else {
    return last ? 0 : 1;;
  }
};
// @lc code=end