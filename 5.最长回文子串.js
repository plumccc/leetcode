/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // 暴力循环
  // let i = 0
  // let j = 1
  // let str = s[i]
  // let res = s[i]
  // function isJudge(judgeStr) {
  //   let z = 0
  //   let w = judgeStr.length - 1
  //   while(z <= w) {
  //     if (judgeStr[z] === judgeStr[w]) {
  //       z++
  //       w--
  //     } else {
  //       return false
  //     }
  //   }
  //   return true
  // }
  // while(i < s.length - 1) {
  //   str += s[j]
  //   if (s[i] === s[j]) {
  //     res = (isJudge(str) && str.length > res.length) ? str : res
  //   }
  //   if (j === s.length - 1) {
  //     i++
  //     j = i
  //     str = s[i]
  //   }
  //   j++
  // } 
  // return res

  // 动态规划
  const len = s.length
  const dp = Array.from(new Array(len), () => new Array(len).fill(0))
  let res = ""
  console.log(dp)
  for(let i = 0; i < len; i++) {
    for(let j = i; j >= 0;j--) {
      dp[j][i] = s[i] == s[j] && ( i - j < 2 || dp[j+1][i-1])
      if(dp[j][i] && i - j + 1 > res.length) {
          res =  s.substring(j, i+1)
      }
    }
  }
  return res
};

// @lc code=end

