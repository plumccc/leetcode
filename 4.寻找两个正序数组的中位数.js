/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const numsArr = [ ...nums1, ...nums2 ].sort((a, b) => a - b)
  const numsLen = numsArr.length
  const middleIndex = numsLen / 2
  return numsLen % 2 ?
          numsArr[Math.floor(middleIndex)] :
          (numsArr[middleIndex] + numsArr[middleIndex - 1]) / 2
};
// @lc code=end

