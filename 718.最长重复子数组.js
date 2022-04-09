/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 * 
 * https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const len1 = nums1.length
  const len2 = nums2.length
  const dp = Array(len1 + 1).fill(0).map(el => Array(len2 + 1).fill(0))
  let maxLen = 0
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }

      maxLen = Math.max(dp[i][j], maxLen)
    }
  }
  return maxLen
};
// @lc code=end

