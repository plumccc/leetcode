/*
 * @lc app=leetcode.cn id=849 lang=javascript
 *
 * [849] 到最近的人的最大距离
 * 
 * https://leetcode.cn/problems/maximize-distance-to-closest-person/description/
 */
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  const seatsLen = seats.length;
  let res = 0;

  for (let i = 0, j = 0; i < seatsLen; i++) {
    if (seats[i]) {
      const distance = !j && !seats[j] ? i - j : Math.floor((i - j) / 2);
      res = Math.max(res, distance);
      j = i;
    } else if (i === seatsLen - 1) {
      // 尾部为空位
      const distance = i - j;
      res = Math.max(res, distance);
    }
  }

  return res;
};

