/*
 * @lc app=leetcode.cn id=3355 lang=javascript
 *
 * [3355] 零数组变换 I
 * 
 * https://leetcode.cn/problems/zero-array-transformation-i/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function (nums, queries) {
  const getMapValue = (map, key) => map.get(key) || 0;

  const subtractTimesMap = queries.reduce((prev, [lIndex, rIndex]) => {
    prev.set(lIndex, getMapValue(prev, lIndex) + 1);
    prev.set(rIndex + 1, getMapValue(prev, rIndex + 1) - 1);
    return prev;
  }, new Map());

  let subtractTimes = 0;
  
  for (let nIndex = 0; nIndex < nums.length; nIndex++) {
    subtractTimes += getMapValue(subtractTimesMap, nIndex);

    if (nums[nIndex] > subtractTimes) return false;
  }

  return true;
};
// @lc code=end

