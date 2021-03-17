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
var middleNode = function(head) {
 let length = 0;
 const getLength = (head) => {
   if (!head) return;
   length++;
   getLength(head.next);
 };
 getLength(head);
 
 const middle = Math.floor(length / 2);
 let currNum = 0;
 const getMiddle = (head) => {
   if (!head) return;
   if (currNum === middle) {
     return head; 
   }
   currNum++;
   return getMiddle(head.next);
 };
 return getMiddle(head);
};

// Optimized with two pointers
var middleNode = function(head) {
  let first = head;
  let second = head;
  while (first && first.next) {
    first = first.next.next;
    second = second.next;
  }
  return second;
};
