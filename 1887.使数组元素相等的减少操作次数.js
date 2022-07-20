/*
 * @lc app=leetcode.cn id=1887 lang=javascript
 *
 * [1887] 使数组元素相等的减少操作次数
 * 
 * https://leetcode.cn/problems/reduction-operations-to-make-the-array-elements-equal/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function (nums) {
  const sortNums = [...new Set(nums)].sort((a, b) => b - a);
  const sortNumsLen = sortNums.length;
  const countMap = new Map();
  let totalCount = 0;
  sortNums.forEach((el, index) => countMap.set(el, sortNumsLen - index - 1));
  nums.forEach(el => totalCount += countMap.get(el));
  return totalCount;
};
// @lc code=end

