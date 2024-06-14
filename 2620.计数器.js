/*
 * @lc app=leetcode.cn id=2620 lang=javascript
 *
 * [2620] 计数器
 * 
 * https://leetcode.cn/problems/counter/
 */

// @lc code=start
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  return function () {
    return n++;
  };
};

/** 
* const counter = createCounter(10)
* counter() // 10
* counter() // 11
* counter() // 12
*/
// @lc code=end