/*
 * @lc app=leetcode.cn id=1909 lang=javascript
 *
 * [1909] 删除一个元素使数组严格递增
 * 
 * https://leetcode.cn/problems/remove-one-element-to-make-the-array-strictly-increasing/
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  const isIncrement = list => {
    for (let i = 0; i < list.length; i++) {
      if (list[i] >= list[i + 1]) {
        return false;
      }
    }
    return true;
  }

  if (isIncrement(nums)) {
    return true;
  }

  for (let i = 0; i < nums.length; i++) {
    const list = [...nums];
    list.splice(i, 1);
    if (isIncrement(list)) {
      return true;
    }
  }

  return false;
};
// @lc code=end

