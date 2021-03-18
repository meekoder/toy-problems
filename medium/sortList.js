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
var sortList = function(head) {
  let array = [];
  let currNode = head;
  while (currNode) {
    array.push(currNode.val);
    currNode = currNode.next;
  }
  array.sort((a, b) => a - b);
  
  currNode = new ListNode();
  head = currNode;
  for (let i = 0; i < array.length; i++) {
    currNode.next = new ListNode(array[i]);  
    currNode = currNode.next;
  }
  return head.next;
};
