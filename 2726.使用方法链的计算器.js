/*
 * @lc app=leetcode.cn id=2726 lang=javascript
 *
 * [2726] 使用方法链的计算器
 * 
 * https://leetcode.cn/problems/calculator-with-method-chaining/description/
 */

// @lc code=start
class Calculator {

  /** 
   * @param {number} value
   */
  constructor(value) {
    this.result = value;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this.result += value;
    return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this.result -= value;
    return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.result *= value;
    return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value === 0) throw "Division by zero is not allowed";
    this.result /= value;
    return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.result **= value;
    return this;
  }

  /** 
   * @return {number}
   */
  getResult() {
    return this.result;
  }
}
// @lc code=end