/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 * 
 * https://leetcode-cn.com/problems/pascals-triangle/
 */
var generate = function (numRows) {
  // const res = []
  if (numRows == 1) return [[1]]
  if (numRows == 2) return [[1], [1, 1]]

  const res = [[1], [1, 1]]
  for (let row = 3; row <= numRows; row++) {
    let curArr = Array(row).fill(1), prevArr = res[row - 2]
    res[row - 1] = curArr.map((el, index) => {
      if (index !== 0 && index !== row - 1) {
        return prevArr[index] + prevArr[index - 1]
      }
      return el
    });
  }
  return res
};
// @lc code=end

