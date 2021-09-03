/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists.length) return null
  if (lists.length == 1) return lists[0]

  /* 两两链表合并 */
  const mergeTwoLists = (l1, l2) => {
    let head = new ListNode()
    let cur = head
    while (l1 && l2) {
      if (l1.val > l2.val) {
        cur.next = l2
        l2 = l2.next
      } else {
        cur.next = l1
        l1 = l1.next
      }
      cur = cur.next
    }
    if (l1 || l2) {
      cur.next = l1 || l2
    }
    return head.next
  }

  // 递归
  // lists.splice(0, 2, mergeTwoLists(lists[0], lists[1]))
  // return mergeKLists(lists)

  let res = null
  lists.forEach(el => {
    res = mergeTwoLists(res, el)
  })
  
  return res
};
// @lc code=end

