/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
var addTwoNumbers = function (l1, l2) {
  let list = new ListNode(0);
  let pointer = list;
  let carry = 0;

  while ((l1 || l2) !== null ||  carry !== 0) {
    let sum = (l1? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    pointer.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    pointer = pointer.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return list.next
};

// @lc code=end
