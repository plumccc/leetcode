/*
 * @lc app=leetcode.cn id=2721 lang=javascript
 *
 * [2721] 并行执行异步函数
 * 
 * https://leetcode.cn/problems/execute-asynchronous-functions-in-parallel/description/
 */

// @lc code=start
/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const funsLen = functions.length;
    if (!funsLen) {
      resolve([]);
      return;
    }

    const resQueue = Array(funsLen).fill(null);
    let resolvedCount = 0;

    functions.forEach(async (fun, funIndex) => {
      try {
        const res = await fun();
        resQueue[funIndex] = res;
        resolvedCount++;
        if (funsLen === resolvedCount) {
          resolve(resQueue);
        }
      } catch (e) {
        reject(e);
      };
    })
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
// @lc code=end