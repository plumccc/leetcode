/*
 * @lc app=leetcode.cn id=1410 lang=javascript
 *
 * [1410] HTML 实体解析器
 * 
 * https://leetcode.cn/problems/html-entity-parser/description/
 */
/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function (text) {
  return text
    .replace(/&quot;/g, '\"')
    .replace(/&apos;/g, '\'')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&frasl;/g, '/')
    .replace(/&amp;/g, '&');
};

