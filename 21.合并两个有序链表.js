/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // const getListVal = list => {
  //   let valArr = []
  //   while (list) {
  //     valArr.push(list.val)
  //     list = list.next
  //   }
  //   return valArr
  // }
  // const listVal = [...getListVal(l1), ...getListVal(l2)]
  // listVal.sort((a, b) => a - b)

  // let l3 = new ListNode()
  // let l4 = l3
  // listVal.forEach(el => {
  //   let node = new ListNode(el)
  //   l4.next = node
  //   l4 = l4.next
  // })
  // return l3.next
  let l3 = new ListNode(), l4 = l3
  while(l1 && l2) {
    if (l1.val < l2.val) {
      l4.next = l1
      l1 = l1.next
    } else {
      l4.next = l2
      l2 = l2.next
    }
    l4 = l4.next
  }
  l4.next = l1 || l2
  return l3.next
};
// @lc code=end

