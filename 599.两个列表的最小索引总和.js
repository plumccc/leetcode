/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 * 
 * https://leetcode-cn.com/problems/minimum-index-sum-of-two-lists/
 */


// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let res = {},
    minIndex = list1.length + list2.length;
  list1.forEach((el, index1) => {
    const index2 = list2.indexOf(el)
    if (index2 > -1) {
      const resIndex = index1 + index2
      minIndex = Math.min(resIndex, minIndex)
      if (!res[resIndex]) {
        res[resIndex] = []
      }
      res[resIndex].push(el)
    }
  })
  return res[minIndex]
};
// @lc code=end

