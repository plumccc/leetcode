/*
 * @lc app=leetcode.cn id=1054 lang=javascript
 *
 * [1054] 距离相等的条形码
 * 
 * https://leetcode.cn/problems/distant-barcodes/
 */

// @lc code=start
/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function (barcodes) {
  let barMap = new Map();
  barcodes.forEach(el => barMap.set(el, (barMap.get(el) || 0) + 1))
  let barArr = [...barMap.entries()];
  barArr.sort((a, b) => b[1] - a[1]);
  let c = 0;
  let barLen = barcodes.length;
  for (let [k, v] of barArr) {
    while (c < barLen && v > 0) {
      barcodes[c] = k;
      c += 2;
      v--;
      if (c >= barLen) {
        c = 1;
      }
    }
  }
  return barcodes;
};
// @lc code=end

