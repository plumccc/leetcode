/*
 * @lc app=leetcode.cn id=1385 lang=javascript
 *
 * [1385] 两个数组间的距离值
 * 
 * https://leetcode.cn/problems/find-the-distance-value-between-two-arrays/
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.every(el => Math.abs(arr1[i] - el) > d)) {
      count++;
    }
  }
  return count;
};
// @lc code=end

