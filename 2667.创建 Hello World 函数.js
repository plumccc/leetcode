/*
 * @lc app=leetcode.cn id=2667 lang=javascript
 *
 * [2667] 创建 Hello World 函数
 * 
 * https://leetcode.cn/problems/create-hello-world-function/description/
 */

// @lc code=start
/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
// @lc code=end