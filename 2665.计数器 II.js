/*
 * @lc app=leetcode.cn id=2665 lang=javascript
 *
 * [2665] 计数器 II
 * 
 * https://leetcode.cn/problems/counter-ii/description/
 */

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let _init = init;

  const increment = () => ++_init;

  const decrement = () => --_init;

  const reset = () => {
    _init = init;
    return _init;
  };

  return {
    increment,
    reset,
    decrement
  }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */