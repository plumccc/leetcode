/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b)
  const Len = nums.length
  let res = []
  let obj = {}
  for (let i = 0; i < Len - 3; i++) {
    for (let j = i + 1; j < Len - 2; j++) {
      let z = j + 1
      let k = Len - 1
      while (z < k) {
        const sum = nums[i] + nums[j] + nums[z] + nums[k]
        if (sum === target) {
          const key = '' + nums[i] + nums[j] + nums[z] + nums[k]
          if (!obj[key]) {
            res.push([nums[i], nums[j], nums[z], nums[k]])
            obj[key] = true
          }
          z++
          k--
        } else if (sum < target) {
          z++
        } else {
          k--
        }
      }
    }
  }
  return res
};
// @lc code=end

