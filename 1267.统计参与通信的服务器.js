/*
 * @lc app=leetcode.cn id=1267 lang=javascript
 *
 * [1267] 统计参与通信的服务器
 * 
 * https://leetcode.cn/problems/count-servers-that-communicate/
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
  return grid.reduce((prev, cur, index, arr) => {
    const rowLen = cur.filter(c => c == 1).length;
    if (rowLen > 1) {
      return prev + rowLen;
    }
    if (rowLen == 1) {
      const t1 = cur.indexOf(1);
      const isHas = arr.some((a, ai) => a[t1] == 1 && ai !== index);
      return isHas ? prev + 1 : prev;
    }
    return prev;
  }, 0);
};