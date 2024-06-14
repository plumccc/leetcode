/*
 * @lc app=leetcode.cn id=2631 lang=javascript
 *
 * [2631] 计数器
 * 
 * https://leetcode.cn/problems/group-by/description/
 */

// @lc code=start
/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  return this.reduce((prev, cur) => {
    const key = fn(cur);
    if (key in prev) {
      prev[key].push(cur)
    } else {
      prev[key] = [cur];
    }
    return prev;
  }, {})
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
// @lc code=end