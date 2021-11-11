/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // 三个方向判重
  const [rows, cols, boxs] = [{}, {}, {}];
  // 遍历数独
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num !== '.') {
        // boxs 数独序号:0~8，一共9个
        const boxIndex = parseInt(i / 3) * 3 + parseInt(j / 3);
        // 如果当前数已经在某个位置出现过了，返回false
        if (rows[i + '-' + num] || cols[j + '-' + num] || boxs[boxIndex + '-' + num]) {
          return false;
        }
        // 三个方向上每个位置，将当前数做标记，表示出现过了
        rows[i + '-' + num] = true;
        cols[j + '-' + num] = true;
        boxs[boxIndex + '-' + num] = true;
      }
    }
  }
  return true;

};
// @lc code=end

