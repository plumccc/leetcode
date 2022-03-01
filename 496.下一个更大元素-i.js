/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 * 
 * https://leetcode-cn.com/problems/next-greater-element-i/
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let len1 = nums1.length,
    len2 = nums2.length,
    res = Array(len1).fill(-1);

  for (let j = 0; j < len1; j++) {
    const index = nums2.indexOf(nums1[j])
    for (let k = index + 1; k < len2; k++) {
      if (nums2[k] > nums1[j]) {
        res[j] = nums2[k]
        break;
      }
    }
  }
  return res
};
// @lc code=end

