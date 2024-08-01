/*
 * @lc app=leetcode.cn id=2622 lang=javascript
 *
 * [2622] 有时间限制的缓存
 * 
 * https://leetcode.cn/problems/cache-with-time-limit/
 */

// @lc code=start
var TimeLimitedCache = function () {
  this.cacheMap = new Map();
  this.handleExpiredKey = () => {
    for (const key of this.cacheMap.keys()) {
      if (this.cacheMap.get(key)?.[1] <= new Date().getTime()) {
        this.cacheMap.delete(key);
      }
    }
  };
};
/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  this.handleExpiredKey();
  const res = this.cacheMap.has(key);
  this.cacheMap.set(key, [value, duration ? new Date().getTime() + duration : '']);
  return res;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  this.handleExpiredKey();
  return this.cacheMap.get(key)?.[0] ?? -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  this.handleExpiredKey();
  return this.cacheMap.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
// @lc code=end