/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 * 
 * https://leetcode.cn/problems/sliding-window-maximum/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const res = [];
  const queue = [];

  for (let i = 0; i < nums.length; i++) {
    // 维护队列单调递减性
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }

    // 进队列
    queue.push(i);

    // 队首已出窗口
    if (queue[0] + k <= i) {
      queue.shift();
    }

    // 插入窗口内最大值
    if (i + 1 >= k) {
      res.push(nums[queue[0]]);
    }
  }
  return res;
};
