/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 * 
 * https://leetcode-cn.com/problems/permutations/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = []
  const find = (arr = []) => {
    if (arr.length == nums.length) {
      res.push(arr)
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (arr.includes(nums[i])) continue;
      find([...arr, nums[i]])
    }
  }
  find()
  return res
};
// @lc code=end

