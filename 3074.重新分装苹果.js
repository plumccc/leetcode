/*
 * @lc app=leetcode.cn id=3074 lang=javascript
 *
 * [3074] 重新分装苹果
 *
 * https://leetcode.cn/problems/apple-redistribution-into-boxes/
 */

// @lc code=start
/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {
  const _capacity = capacity.sort((a, b) => b - a);
  let appleNums = apple.reduce((prev, cur) => prev + cur, 0);
  let res = 1;
  while (true) {
    appleNums -= _capacity[res - 1];
    if (appleNums > 0) {
      res++;
    } else {
      break;
    }
  }
  return res;
};
// @lc code=end
