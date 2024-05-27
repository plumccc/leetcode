/*
 * @lc app=leetcode.cn id=670 lang=javascript
 *
 * [670] 最大交换
 * 
 * https://leetcode.cn/problems/maximum-swap/description/
 */
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  const _num = num.toString().split('');
  const _numLen = _num.length;

  for (let i = 0; i < _numLen; i++) {
    let swapNum = _num[i], swapIndex = i;
    for (let j = _numLen - 1; j > i; j--) {
      if (_num[j] > swapNum) {
        swapNum = _num[j];
        swapIndex = j;
      }
    }

    if (swapIndex !== i) {
      const temp = _num[i];
      _num[i] = _num[swapIndex];
      _num[swapIndex] = temp;
      return +_num.join('');
    }
  }

  return num;
};

