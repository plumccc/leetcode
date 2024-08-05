/*
 * @lc app=leetcode.cn id=2661 lang=javascript
 *
 * [2661] 找出叠涂元素
 * 
 * https://leetcode.cn/problems/first-completely-painted-row-or-column/
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function (arr, mat) {
  const m = mat.length;
  const n = mat[0].length;
  const matMap = new Map();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      matMap.set(mat[i][j], [i, j]);
    }
  }

  const rowMap = new Map();
  const colMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    const [row, col] = matMap.get(arr[i]);
    rowMap.set(row, (rowMap.get(row) || 0) + 1);
    colMap.set(col, (colMap.get(col) || 0) + 1);
    if (rowMap.get(row) === n || colMap.get(col) === m) {
      return i;
    }
  }
};
// @lc code=end

