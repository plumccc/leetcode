/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 * 
 * https://leetcode.cn/problems/lemonade-change/
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let moneyMap = {};
  for (let money of bills) {
    switch (money) {
      case 10:
        if (moneyMap[5]) {
          moneyMap[5] -= 1;
          break;
        }
        return false;
      case 20:
        if (moneyMap[10] && moneyMap[5] >= 1) {
          moneyMap[5] -= 1;
          moneyMap[10] -= 1;
          break;
        }
        if (moneyMap[5] >= 3) {
          moneyMap[5] -= 3;
          break;
        }
        return false;
      default: break;
    }
    moneyMap[money] = (moneyMap[money] || 0) + 1
  }
  return true;
};
// @lc code=end

