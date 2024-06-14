/*
 * @lc app=leetcode.cn id=2629 lang=javascript
 *
 * [2629] 复合函数
 * 
 * https://leetcode.cn/problems/function-composition/description/
 */

// @lc code=start
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  // return function (x) {
  //   for (let i = functions.length - 1; i >= 0; i--) {
  //     x = functions[i](x);
  //   }
  //   return x;
  // }

  return function (x) {
    return functions.reduceRight((prev, fn) => fn(prev), x);
  }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
// @lc code=end