/*
 * @lc app=leetcode.cn id=2637 lang=javascript
 *
 * [2637] 有时间限制的 Promise 对象
 * 
 * https://leetcode.cn/problems/promise-time-limit/
 */

// @lc code=start
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    // return Promise.race([
    //     fn(...args),
    //     new Promise((_, reject) => setTimeout(() => reject('Time Limit Exceeded'), t))
    // ])

    return new Promise((resolve, reject) => {
      const timeLimit = setTimeout(() => reject('Time Limit Exceeded'), t);

      fn(...args).then(res => {
        clearTimeout(timeLimit);
        resolve(res);
      }).catch(e => {
        reject(e);
      });
    });
  }
};

/**
* const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
* limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
*/
// @lc code=end