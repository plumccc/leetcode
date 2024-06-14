/*
 * @lc app=leetcode.cn id=2666 lang=javascript
 *
 * [2666] 只允许一次函数调用
 * 
 * https://leetcode.cn/problems/allow-one-function-call/
 */

// @lc code=start
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let times = 0;
  return function (...args) {
      if (times) return;
      times++;
      return fn(...args);
  }
};

/**
* let fn = (a,b,c) => (a + b + c)
* let onceFn = once(fn)
*
* onceFn(1,2,3); // 6
* onceFn(2,3,6); // returns undefined without calling fn
*/
// @lc code=end