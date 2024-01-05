/*
 * @lc app=leetcode.cn id=2630 lang=javascript
 *
 * [2630] 记忆函数 II
 * 
 * https://leetcode.cn/problems/memoize-ii/description/
 */
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cacheArgMap = new Map();
  const cacheResMap = new Map();
  let cacheArgId = 0;

  return function (...args) {
    let key;
    for (const arg of args) {
      if (!cacheArgMap.has(arg)) {
        cacheArgMap.set(arg, ++cacheArgId);
      }
      key += cacheArgMap.get(arg) + '-';
    }

    if (cacheResMap.has(key)) {
      return cacheResMap.get(key);
    }

    const res = fn(...args);
    cacheResMap.set(key, res);
    return res;
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