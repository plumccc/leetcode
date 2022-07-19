/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 * 
 * https://leetcode.cn/problems/insert-delete-getrandom-o1/
 */

// @lc code=start

var RandomizedSet = function () {
  this.nums = [];
  this.indexMap = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.indexMap.has(val)) {
    return false;
  }
  this.nums.push(val);
  this.indexMap.set(val, this.nums.length - 1);
  return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.indexMap.has(val)) {
    return false;
  }

  const curIndex = this.indexMap.get(val);
  const numsLen = this.nums.length;
  this.nums[curIndex] = this.nums[numsLen - 1];
  this.indexMap.set(this.nums[curIndex], curIndex);
  this.nums.length = numsLen - 1;
  this.indexMap.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.nums.length);
  return this.nums[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

