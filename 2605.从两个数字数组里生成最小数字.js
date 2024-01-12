/*
 * @lc app=leetcode.cn id=2605 lang=javascript
 *
 * [2605] 从两个数字数组里生成最小数字
 * 
 * https://leetcode.cn/problems/form-smallest-number-from-two-digit-arrays/description
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1, nums2) {
  let res = composeNum(nums1[0], nums2[0]);
  for (const n1 of nums1) {
    for (const n2 of nums2) {
      if (res > composeNum(n1, n2)) {
        res = composeNum(n1, n2);
      }
    }
  }
  return res;
};

var composeNum = function (num1, num2) {
  if (num1 === num2) {
    return num1;
  } else if (num1 > num2) {
    return +`${num2}${num1}`;
  } else {
    return +`${num1}${num2}`;
  }
}