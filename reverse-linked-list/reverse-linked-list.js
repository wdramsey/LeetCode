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
var reverseList = function(head) {
  let prev = null;
    while (head) {
        //console.log('head',head)
        var next = head.next;
        //console.log('next',next)
        head.next = prev;
        //console.log('head.next',head.next)
        prev = head;
        //console.log('prev',prev)
        head = next;
        //console.log('headlast', head)
    }
    return prev;
    
};