/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 * 
 * https://leetcode-cn.com/problems/container-with-most-water/
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  let maxArea = 0
  while (left < right) {
    let leftVal = height[left]
    let rightVal = height[right]
    let curArea = Math.min(leftVal, rightVal) * (right - left)
    maxArea = Math.max(curArea, maxArea)
    if (leftVal > rightVal) {
      right--
    } else {
      left++
    }
  }
  return maxArea
};
// @lc code=end

