/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let res = nums[0] + nums[1] + nums[2]
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1
    let z = nums.length - 1
    while (j < z) {
      const sum = nums[i] + nums[j] + nums[z]
      const diff1 = Math.abs(res - target)
      const diff2 = Math.abs(sum - target)
      if (diff2 < diff1) {
        res = sum
      }
      
      if (sum < target) {
        j++
      } else if (sum > target) {
        z--
      } else {
        break;
      }
    }
  }
  return res
};
// @lc code=end

