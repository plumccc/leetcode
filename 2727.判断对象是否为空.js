/*
 * @lc app=leetcode.cn id=2727 lang=javascript
 *
 * [2727] 判断对象是否为空
 * 
 * https://leetcode.cn/problems/is-object-empty/description/
 */

// @lc code=start
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  return !Object.keys(obj).length;
};
// @lc code=end

