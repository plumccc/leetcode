/*
 * @lc app=leetcode.cn id=1146 lang=javascript
 *
 * [1146] 快照数组
 * 
 * https://leetcode.cn/problems/snapshot-array/
 */

// @lc code=start
/**
 * @param {number} length
 */
var SnapshotArray = function (length) {
  this.snap_id = 0;
  this.map = new Map();
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
  this.map.set(`${index}-${this.snap_id}`, val);
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
  return this.snap_id++;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
  for (let i = snap_id; i >= 0; i--) {
    const val = this.map.get(`${index}-${i}`);
    if (val !== undefined) {
      return val;
    }
  }
  return 0;
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
// @lc code=end

