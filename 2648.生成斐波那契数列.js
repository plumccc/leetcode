/*
 * @lc app=leetcode.cn id=2648 lang=javascript
 *
 * [2648] 生成斐波那契数列
 * 
 * https://leetcode.cn/problems/generate-fibonacci-sequence/description/
 */

// @lc code=start
/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let cur = 0, next = 1;
  if (!cur) {
    yield cur
  };
  while (true) {
    [cur, next] = [next, cur + next];
    yield cur
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
// @lc code=end