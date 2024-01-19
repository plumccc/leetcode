/*
 * @lc app=leetcode.cn id=1232 lang=javascript
 *
 * [1232] 缀点成线
 * 
 * https://leetcode.cn/problems/check-if-it-is-a-straight-line/description/
 */
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  let slope;

  for (let i = 1; i < coordinates.length; i++) {
    const xInterval = coordinates[i][0] - coordinates[i - 1][0];
    const yInterval = coordinates[i][1] - coordinates[i - 1][1];

    // x轴间隔等于0，且斜率不存在，则此线平行于y轴
    if (!xInterval && !slope) {
      continue;
    }

    // x轴间隔等于0，且斜率存在，则此线不是直线
    if (!xInterval && slope) {
      return false;
    }

    const _slope = yInterval / xInterval;
    // 赋值初始斜率
    if (i === 1) {
      slope = _slope;
      continue;
    }
    // 两点斜率不相等，非直线
    if (_slope !== slope) {
      return false;
    }
  }

  return true;
};