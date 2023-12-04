/*
 * @lc app=leetcode.cn id=2649 lang=javascript
 *
 * [2649] 嵌套数组生成器
 * 
 * https://leetcode.cn/problems/nested-array-generator/description/
 */
/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
  arr = arr.flat(Infinity);
  for (let num of arr) {
    yield num;
  }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */