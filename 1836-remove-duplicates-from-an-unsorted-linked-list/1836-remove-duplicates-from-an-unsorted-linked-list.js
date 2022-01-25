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
var deleteDuplicatesUnsorted = function(head) {
    let map = {}
    let current = head;
    
    //traverse and fill my map with node occurences
      while(current){
        if(!map[current.val]){
          map[current.val] = 1
        }else{
          map[current.val]++
        }
          current = current.next
      }
    
    //traverse the list and delete where necessary
    let dummyHead = new ListNode(0, head);
    current = dummyHead
    
    while(current){
        //check for duplicates 
        while(current.next && map[current.next.val] > 1){
          current.next = current.next.next
        }

        current = current.next
    }
    return dummyHead.next
};