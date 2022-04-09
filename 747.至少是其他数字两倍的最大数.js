/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 * 
 * https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let maxNum = 0, maxIndex = 0, secondNum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxNum) {
      maxIndex = i
      secondNum = maxNum
      maxNum = nums[i]
    }

    if (nums[i] > secondNum && nums[i] < maxNum) {
      secondNum = nums[i]
    }
  }

  return maxNum >= secondNum * 2 ? maxIndex : -1
};
// @lc code=end

