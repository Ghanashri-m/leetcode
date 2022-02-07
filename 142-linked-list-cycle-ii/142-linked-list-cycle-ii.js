/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(!head) return null;
    
    let hm = new Map();
    
    let temp=head;

    while(temp){
        if(hm.has(temp)) return hm.get(temp);
        else hm.set(temp,temp);
        temp=temp.next;
    }
    return null;
};