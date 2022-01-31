
var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

// class MyLinkedList() {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }
// }

var Node = function(data, next = null) {
    this.data = data;
    this.next = next;
}


// User defined class node alternative
// class Node {
//     // constructor
//     constructor(data, next)
//     {
//         this.data = data;
//         this.next = next
//     }
// }

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(!this.head || index < 0){
        // If list is empty or index is a negative number.
        return -1;
    }
    let count = 0;
    let ptr = this.head;
        while(ptr && count < index){
            // Go to that node in the index.
            ptr = ptr.next;
            count++;
        }
        if(ptr){
            return ptr.data
        }else{
            // If index was higher than or equal to length of the list.
            return -1;
        }
};

MyLinkedList.prototype.getFirst = function() {
    return this.head;
};

MyLinkedList.prototype.getLast = function() {
    if (!this.head) {
        return null;
    }
    let node = this.head;
    
    while (node) {
        if (!node.next) {
            return node;
        }
        node = node.next;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const node = new Node(val, this.head);
    this.head = node;
    //this.head = new Node(val, this.head);
};

MyLinkedList.prototype.size = function() { // returns number of nodes in a linked list
    let counter = 0;
    let node = this.head;
    while (node) {
        counter++;
        node = node.next;
    }
    return counter;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const node = new Node(val);
    if (!this.head) {
        this.head = node;
    } else {
        let iterator = this.head;
         while(iterator.next) {
            iterator = iterator.next;
        }
        iterator.next = node;
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index === 0){
        // Add the value to the head of our list. 
        return this.addAtHead(val);
    } else if(this.head === null){
        // If the list is empty then there's no valid index if index is not 1.
        return;
    }
        let count = 0;
        let ptr = this.head;
        while(ptr && count < index -1){
            // Get the node before that index.
            // So we can insert it in betweeen index-1 and index+1
            ptr = ptr.next;
            count++;
        }
        if(count === index -1){
            if(ptr === null){
                // If the value to add is at index = list length
                // Then we just add it to the tail.
                return this.addAtTail(val);
            }
            let new_node = new Node(val);
            new_node.next = ptr.next;
            ptr.next = new_node;
        }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0) {
        return;
    } else if (index === 0) {
        // If value is to delete is at the head.
        if(this.head !== null){
            this.head = this.head.next;
        }
        return;
    }
        let ptr = this.head;
        let counter = 0;
    
        while (ptr && counter < index - 1) {
            ptr = ptr.next;
            counter++;
        }
        if (!ptr || !ptr.next) {
            return;
        } else {
            ptr.next = ptr.next.next;
        }
        
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */