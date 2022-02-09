/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 * 
 * https://leetcode-cn.com/problems/combination-sum/
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = []
  const find = (sum = 0, combinationArr = []) => {
    if (sum === target) res.push(combinationArr)
    for (let item of candidates) {
      if (sum + item <= target && item >= (combinationArr[combinationArr.length - 1] || 0)) {
        find(sum + item, [...combinationArr, item])
      }
    }
  }

  find()
  return res
};
// @lc code=end

