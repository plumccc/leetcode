/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

const { lib } = require("crypto-js");
const { node } = require("webpack");

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // 创建虚拟头节点
  let newList = new ListNode(0);
  // 将虚拟头结点赋值被cur 之后这个cur会不断地向后移动 
  let cur = newList
  let carry = 0; // 存储进位
  while(l1 || l2) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
    if(l1) l1 = l1.next
    if(l2) l2 = l2.next
  }
  // 遍历完后，如果还有进位，追加到最后
  if(carry) {
    cur.next = new ListNode(carry);
  }
  return newList.next;
};
// @lc code=end

