/*
 * @lc app=leetcode.cn id=17.20 lang=javascript
 *
 * [17.20] 面试题17.20.连续中值
 * 
 * https://leetcode.cn/problems/continuous-median-lcci/
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.nums = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  let i = 0;
  while (i <= this.nums.length) {
    if (num <= (this.nums?.[i] ?? num)) {
      this.nums.splice(i, 0, num);
      break;
    }
    i++;
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const numsLen = this.nums.length;
  if (!(numsLen % 2)) {
    const halfIndex = numsLen / 2;
    return (this.nums[halfIndex - 1] + this.nums[halfIndex]) / 2;
  } else {
    return this.nums[Math.floor(numsLen / 2)];
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

