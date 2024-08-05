/*
 * @lc app=leetcode.cn id=2553 lang=javascript
 *
 * [2553] 分割数组中数字的数位
 * 
 * https://leetcode.cn/problems/separate-the-digits-in-an-array/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  return nums.reduce((prev, cur) => {
    if (cur >= 10) {
      prev.push(...(cur.toString().split('').map(c => +c)));
    } else {
      prev.push(cur)
    };
    return prev;
  }, []);
};
// @lc code=end

