/*
 * @lc app=leetcode.cn id=2621 lang=javascript
 *
 * [2621] 睡眠函数
 * 
 * https://leetcode.cn/problems/sleep/description/
 */

// @lc code=start
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
// @lc code=end