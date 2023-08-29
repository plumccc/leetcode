/*
 * @lc app=leetcode.cn id=2619 lang=javascript
 *
 * [2619] 数组原型对象的最后一个元素
 * 
 * https://leetcode.cn/problems/array-prototype-last/
 */
// @lc code=start
Array.prototype.last = function () {
  const arrLen = this.length;
  if (!arrLen) return -1;
  return this[arrLen - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */