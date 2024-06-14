/*
 * @lc app=leetcode.cn id=2693 lang=javascript
 *
 * [2693] 使用自定义上下文调用函数
 * 
 * https://leetcode.cn/problems/call-function-with-custom-context/
 */

// @lc code=start
/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function(context, ...args) {
  return this.apply(context, args);
}

/**
* function increment() { this.count++; return this.count; }
* increment.callPolyfill({count: 1}); // 2
*/
// @lc code=end