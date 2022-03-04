/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 * 
 * https://leetcode-cn.com/problems/relative-ranks/
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const sortObj = {
    0: "Gold Medal",
    1: "Silver Medal",
    2: "Bronze Medal"
  },
    sortScore = [...score].sort((a, b) => b - a)
  return score.map(el => {
    const sortIndex = sortScore.indexOf(el)
    const name = sortObj[sortIndex]
    return name ? name : `${sortIndex + 1}`
  })
};
// @lc code=end

