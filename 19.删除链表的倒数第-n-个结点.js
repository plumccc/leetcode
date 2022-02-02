/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 * 
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let nodeArr = []
  while (head) {
    nodeArr.push(head.val)
    head = head.next
  }
  nodeArr.splice(nodeArr.length - n, 1)

  let newHead = new ListNode()
  let cur = newHead;
  nodeArr.forEach(el => {
    let node = new ListNode(el)
    cur.next = node
    cur = cur.next
  })

  return newHead.next
};
// @lc code=end

