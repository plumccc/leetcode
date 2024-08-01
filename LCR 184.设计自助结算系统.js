/*
 * @lc app=leetcode.cn id=LCR 184 lang=javascript
 *
 * [LCR 184] 设计自助结算系统
 * 
 * https://leetcode.cn/problems/dui-lie-de-zui-da-zhi-lcof/
 */

// @lc code=start
var Checkout = function () {
  this.products = [];
};

/**
 * @return {number}
 */
Checkout.prototype.get_max = function () {
  if (!!this.products.length) {
    return Math.max(...this.products);
  }

  return -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
Checkout.prototype.add = function (value) {
  this.products.push(value);
};

/**
 * @return {number}
 */
Checkout.prototype.remove = function () {
  if (!!this.products.length) {
    return this.products.splice(0, 1);
  }

  return -1;
};

/**
 * Your Checkout object will be instantiated and called as such:
 * var obj = new Checkout()
 * var param_1 = obj.get_max()
 * obj.add(value)
 * var param_3 = obj.remove()
 */
// @lc code=end