/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
<<<<<<< HEAD
=======
 * 
 * https://leetcode-cn.com/problems/combination-sum/
>>>>>>> 3f4ad97d39110eda78d904ab7428074ef4a31b86
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
<<<<<<< HEAD
var combinationSum = function(candidates, target) {

=======
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
>>>>>>> 3f4ad97d39110eda78d904ab7428074ef4a31b86
};
// @lc code=end

