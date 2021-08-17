/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

const { Console } = require("console");

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  // 二维数组
  // if (numRows === 1 || s.length <= numRows) return s
  // /*
  // *[
  // *  ['', '', '']
  // *  ['', '', '']
  // *  ['', '', '']
  // *]
  // */
  // let sLen = s.length
  // // 定义长度为 numRows 的二维数据
  // const strArr = Array.from(new Array(numRows), () => new Array(sLen).fill(''))
  // // 横
  // let horIndex = 0
  // // 竖
  // let verIndex = 0
  // // 方向 （eg： true --> 竖， false --> 斜）
  // let direction = true
  // // 变换后字符串
  // let resStr = ""
  // for(let i= 0; i< sLen; i++) {
  //   strArr[horIndex][verIndex] = s[i]
  //   if (direction) {
  //     if (horIndex < numRows - 1) {
  //       horIndex++
  //     } else {
  //       horIndex --
  //       verIndex ++
  //       direction = false
  //     }
  //   } else {
  //     horIndex = horIndex ? horIndex - 1 : horIndex + 1
  //     verIndex ++
  //     direction = horIndex === 0
  //   }
  // }
  // strArr.forEach(el => resStr += el.join(""))
  // return resStr

  if (numRows === 1 || s.length <= numRows) return s
  const strArr = new Array(numRows).fill("")
  let index = 0
  let plus = true
  for(let i= 0; i< s.length; i++) {
    strArr[index] += s[i]

    if (plus) {
      index++
    } else {
      index--
    }

    if (index === 0) plus = true
    if (index === numRows - 1) plus = false
  }
  return strArr.join("")
};
// @lc code=end

