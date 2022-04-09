/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 * 
 * https://leetcode-cn.com/problems/distribute-candies/
 */

// @lc code=start
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const noRepeat = [...new Set(candyType)],
    n = candyType.length / 2,
    len = noRepeat.length;
  return len > n ? n : len
};
// @lc code=end

