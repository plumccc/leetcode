/*
 * @lc app=leetcode.cn id=2437 lang=javascript
 *
 * [2437] 有效时间的数目
 * 
 * https://leetcode.cn/problems/number-of-valid-clock-times/description/
 */

// @lc code=start
/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
  const counts = (str, max) => {
    const index = str.indexOf('?');
    const strArr = str.split('');
    let count = 0;

    for (let j = 0; j <= 9; j++) {
      strArr[index] = j;
      const _str = strArr.join('');

      if (_str.includes('?')) {
        count += counts(_str, max);
        continue;
      }

      if (+_str > max) {
        break;
      }

      count++;
    }

    return count;
  };

  const [hh, mm] = time.split(':');
  let res = 1;

  if (hh.includes('?')) {
    res *= counts(hh, 23);
  }

  if (mm.includes('?')) {
    res *= counts(mm, 59);
  }

  return res;
};
// @lc code=end

