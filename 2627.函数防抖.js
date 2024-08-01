/*
 * @lc app=leetcode.cn id=2627 lang=javascript
 *
 * [2627] 函数防抖
 * 
 * https://leetcode.cn/problems/debounce/description/
 */

// @lc code=start
/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => fn(...args), t);
  }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
// @lc code=end