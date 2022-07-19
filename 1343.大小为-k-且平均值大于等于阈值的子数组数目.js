/*
 * @lc app=leetcode.cn id=1343 lang=javascript
 *
 * [1343] 大小为 K 且平均值大于等于阈值的子数组数目
 * 
 * https://leetcode.cn/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  let count = 0;
  let target = k * threshold;
  let sums = 0;
  let l = 1, r = k;

  for (let i = 0; i < k; i++) sums += arr[i];

  if (sums >= target) count++;

  while (r < arr.length) {
    sums -= arr[l - 1];
    sums += arr[r];

    if (sums >= target) count++;

    l++;
    r++;
  }
  
  return count;
};
// @lc code=end

