/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 * 
 * https://leetcode.cn/problems/subarray-sum-equals-k/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const numsLen = nums.length;
  let count = 0;
  for (let i = 0; i < numsLen; i++) {
    let sum = 0;
    for (let j = i; j < numsLen; j++) {
      sum = sum + nums[j];
      if (sum == k) {
        count++;
      }
    }
  }

  return count;
};
// @lc code=end
