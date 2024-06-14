/*
 * @lc app=leetcode.cn id=2624 lang=javascript
 *
 * [2624] 蜗牛排序
 * 
 * https://leetcode.cn/problems/snail-traversal/
 */

// @lc code=start
/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) return [];
  let newArr = [];
  let fIndex = 0;
  // 二维数组填充顺序
  // true --> 从上到下、false --> 从下到上
  let sequence = true;
  this.forEach((d, di) => {
    const sIndex = Math.floor(di / rowsCount);

    if (!newArr[fIndex]) newArr[fIndex] = [];

    newArr[fIndex][sIndex] = d;

    if (sequence) {
      if (fIndex === rowsCount - 1) {
        sequence = false;
      } else {
        fIndex++;
      }
    } else {
      if (fIndex === 0) {
        sequence = true;
      } else {
        fIndex--;
      }
    }
  });

  return newArr;
}

/**
* const arr = [1,2,3,4];
* arr.snail(1,4); // [[1,2,3,4]]
*/
// @lc code=end