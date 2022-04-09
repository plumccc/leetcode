/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 * 
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  // let valArr = []
  // while (head) {
  //   valArr.push(head.val)
  //   head = head.next
  // }

  // let list = new ListNode(),
  //   cur = list,
  //   i = 0
  
  // while(i < valArr.length) {
  //   if (i + 1 < valArr.length) {
  //     cur.next = new ListNode(valArr[i + 1])
  //     cur = cur.next
  //   }
  //   cur.next = new ListNode(valArr[i])
  //   cur = cur.next
  //   i += 2
  // }

  // return list.next
  
  let list = new ListNode(), cur = list
  while(head) {
    if(head.next) {
      cur.next = new ListNode(head.next.val)
      cur = cur.next
    }
    cur.next = new ListNode(head.val)
    cur = cur.next
    head = (head.next && head.next.next) || null
  }
  return list.next
};
// @lc code=end

