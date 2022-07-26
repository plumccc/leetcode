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
  // let moneyMap = {};
  // for (let money of bills) {
  //   switch (money) {
  //     case 10:
  //       if (moneyMap[5]) {
  //         moneyMap[5] -= 1;
  //         break;
  //       }
  //       return false;
  //     case 20:
  //       if (moneyMap[10] && moneyMap[5] >= 1) {
  //         moneyMap[5] -= 1;
  //         moneyMap[10] -= 1;
  //         break;
  //       }
  //       if (moneyMap[5] >= 3) {
  //         moneyMap[5] -= 3;
  //         break;
  //       }
  //       return false;
  //     default: break;
  //   }
  //   moneyMap[money] = (moneyMap[money] || 0) + 1
  // }
  // return true;
  
  let five = 0, ten = 0;
  for (const bill of bills) {
    if (bill === 5) {
      five += 1;
    } else if (bill === 10) {
      if (five === 0) {
        return false;
      }
      five -= 1;
      ten += 1;
    } else {
      if (five > 0 && ten > 0) {
        five -= 1;
        ten -= 1;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  return true;

};
// @lc code=end

