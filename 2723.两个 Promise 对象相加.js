/*
 * @lc app=leetcode.cn id=2723 lang=javascript
 *
 * [2723] 两个 Promise 对象相加
 * 
 * https://leetcode.cn/problems/add-two-promises/description/
 */

// @lc code=start
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  return new Promise((resovle) => Promise.all([promise1, promise2]).then(([n1, n2]) => resovle(n1 + n2)));
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
// @lc code=end

