/*
 * @lc app=leetcode.cn id=1018 lang=javascript
 *
 * [1018] 可被 5 整除的二进制前缀
 * 
 * https://leetcode.cn/problems/binary-prefix-divisible-by-5/description/
 */

/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {
  let ans = []
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum = sum * 2 + nums[i]
    sum = sum % 5
    ans.push(sum == 0)
  }
  return ans
};
