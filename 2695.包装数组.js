/*
 * @lc app=leetcode.cn id=2695 lang=javascript
 *
 * [2695] 包装数组
 * 
 * https://leetcode.cn/problems/array-wrapper/description/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
  this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((p, c) => p + c, 0);
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  return "[" + this.nums.join(",") + "]"
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
// @lc code=end

