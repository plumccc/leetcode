/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 * 
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {

  /** 链表 --> 数组 --> 反转 --> 生成新链表 */
  let headArr = [];
  while (head) {
    headArr.push(head.val)
    head = head.next
  }

  let list = new ListNode()
  let cur = list
  let i = 0
  while (i < headArr.length) {
    const curArr = headArr.slice(i, i + k)
    if (i + k <= headArr.length) {
      curArr.reverse()
    }
    curArr.forEach(el => {
      cur.next = new ListNode(el)
      cur = cur.next
    })
    i += k
  }
  return list.next
};
// @lc code=end

