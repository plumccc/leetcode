/*
 * @lc app=leetcode.cn id=2705 lang=javascript
 *
 * [2705] 精简对象
 * 
 * https://leetcode.cn/problems/compact-object/description/
 */

// @lc code=start
/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (obj instanceof Object) {
    const isArray = obj instanceof Array;
    const newObj = isArray ? [] : {};
    for (const oKey in obj) {
      const oVal = compactObject(obj[oKey]);
      if (oVal) {
        if (isArray) {
          newObj.push(oVal);
        } else {
          newObj[oKey] = oVal;
        }
      }
    }
    return newObj;
  }

  return Boolean(obj) && obj;
};
// @lc code=end