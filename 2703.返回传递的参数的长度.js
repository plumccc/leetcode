/*
 * @lc app=leetcode.cn id=2703 lang=javascript
 *
 * [2703] 返回传递的参数的长度
 * 
 * https://leetcode.cn/problems/return-length-of-arguments-passed/description/
 */

// @lc code=start
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
// @lc code=end