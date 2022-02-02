/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 * 
 * https://leetcode-cn.com/problems/3sum/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    // 大于 0，就不可能存在三元组
    if (nums[i] > 0) break;
    // 相同的不再寻找
    if (nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let z = nums.length - 1;
    while (j < z) {
      // 相同的不再寻找
      if (nums[j] === nums[j - 1] && i !== j - 1) {
        j++;
        continue;
      }
      const sum = nums[i] + nums[j] + nums[z]
      if (sum == 0) {
        res.push([nums[i], nums[j], nums[z]])
        j++
        z--
      } else if (sum > 0) {
        z--
      } else {
        j++
      }
    }
  }
  return res
};
// @lc code=end

