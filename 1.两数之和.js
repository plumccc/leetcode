/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 双循环暴力
  // for(let i= 0 ; i< nums.length - 1; i++) {
  //   for(let j= i + 1; j< nums.length; j++) {
  //     if(nums[i] + nums[j] === target) return [ i, j ]
  //   }
  // }

  // for(let i= 0; i< nums.length; i++) {
  //   const res = target - nums[i]
  //   if (nums.indexOf(res) !== -1 && nums.indexOf(res) !== i) {
  //     return [ i, nums.indexOf(res) ]
  //   }
  // }

  // 哈希
  let map = new Map()
  map.set(nums[0], 0)
  for(let i= 1; i< nums.length; i++) {
    const res = target - nums[i]
    if (map.get(res) !== undefined) return [ map.get(res), i ]
    map.set(nums[i], i)
  }
};
// @lc code=end

