/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 var findSubstring = function(s, words) {
  const len = words[0].length
  const res = []
  // 循环, 循环的次数为字符串长度减去words所有字符串总和长度-1, 因为这个长度后面的字符串肯定不能拼接成words数组的数据
  for (let i = 0; i <= s.length - words.length * len; i++) {
    const wordsCopy = [...words]
    // 深度优先遍历
    dfs(wordsCopy, s.substring(i), i)
  }

  return res

  function dfs(arr, s, start) {
    // 递归的结束条件为数组的长度为0, 或者进不去下方的判断
    if (arr.length === 0) return res.push(start)

    // 从字符串开始剪切固定长度字符串, 去words中查找, 如果找不到, 结束, 如果找到了 继续往下查找
    const str = s.substr(0, len)

    const index = arr.findIndex((item) => item === str)

    if (index > -1) {
      // 递归查找之前需要将已经使用过的数组索引删除, 字符串也需要删除已经判断过的
      arr.splice(index, 1)
      dfs(arr, s.substring(len), start)
    }
  }
}
// @lc code=end

