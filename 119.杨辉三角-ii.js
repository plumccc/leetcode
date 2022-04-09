/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 * 
 * https://leetcode-cn.com/problems/pascals-triangle-ii/
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let res = [[1], [1, 1]]
  for (let i = 2; i <= rowIndex; i++) {
    let curArr = Array(i + 1).fill(1), prevArr = res[i - 1]
    for (let j = 1; j < i; j++) {
      curArr[j] = prevArr[j - 1] + prevArr[j]
    }
    res[i] = curArr
  }
  return res[rowIndex]
};
// @lc code=end

