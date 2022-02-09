/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 * 
 * https://leetcode-cn.com/problems/combination-sum-ii/
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = []
  candidates.sort((a, b) => a - b)
  const find = (sum = 0, combinationArr = [], start = 0) => {
    if (sum === target) {
      res.push(combinationArr)
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] + sum > target) break;
      //相同数字只允许循环的第一个递归，避免重复
      if (candidates[i] === candidates[i - 1] && i > start) continue;
      find(sum + candidates[i], [...combinationArr, candidates[i]], i + 1)
    }
  }


  find()
  return res
};
// @lc code=end

