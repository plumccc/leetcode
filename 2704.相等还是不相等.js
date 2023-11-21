/*
 * @lc app=leetcode.cn id=2704 lang=javascript
 *
 * [2704] 相等还是不相等
 * 
 * https://leetcode.cn/problems/to-be-or-not-to-be/
 */

// @lc code=start
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  const toBe = (oVal) => {
    if (oVal === val) {
      return oVal === val
    }
    throw Error('Not Equal');
  };

  const notToBe = (oVal) => {
    if (oVal !== val) {
      return true;
    }
    throw Error('Equal');
  };

  return {
    toBe,
    notToBe
  }
};

// @lc code=end

