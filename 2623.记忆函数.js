/*
 * @lc app=leetcode.cn id=2623 lang=javascript
 *
 * [2623] 记忆函数
 * 
 * https://leetcode.cn/problems/memoize/
 */

// @lc code=start
/**
 * @param {Function} fn
 */
function memoize(fn) {
  const cacheMap = new Map();
  return function (...args) {
    const key = args.join(':');
    if (cacheMap.has(key)) return cacheMap.get(key);
    const val = fn(...args);
    cacheMap.set(key, val);
    return val;
  }
}


/** 
* let callCount = 0;
* const memoizedFn = memoize(function (a, b) {
*	 callCount += 1;
*   return a + b;
* })
* memoizedFn(2, 3) // 5
* memoizedFn(2, 3) // 5
* console.log(callCount) // 1 
*/