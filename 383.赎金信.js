/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 * 
 * https://leetcode.cn/problems/ransom-note/description/
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const ransomNoteArr = ransomNote.split('');
  const magazineArr = magazine.split('');
  const magazineMap = magazineArr.reduce((prev, cur) => prev.set(cur, (prev.get(cur) || 0) + 1), new Map());

  for (const i of ransomNoteArr) {
    if (!magazineMap.get(i)) {
      return false;
    }

    magazineMap.set(i, magazineMap.get(i) - 1);
  }

  return true;
};

