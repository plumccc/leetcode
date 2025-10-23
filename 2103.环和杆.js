/*
 * @lc app=leetcode.cn id=2103 lang=javascript
 *
 * [2103] 环和杆
 *
 * https://leetcode.cn/problems/rings-and-rods/
 */

// @lc code=start
/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  const ringsArray = rings.split("");
  const map = new Map();

  let res = 0;

  for (let i = 0; i < ringsArray.length; i += 2) {
    const key = ringsArray[i + 1];
    let value = map.get(key) || "";

    if (value === "RGB") continue;

    value += ringsArray[i];

    if (value.includes("R") && value.includes("G") && value.includes("B")) {
      value = "RGB";
      res++;
    }
    map.set(key, value);
  }

  return res;
};
// @lc code=end
