/**
 * Initialize your data structure here.
 */
const ListNode = function(val) {
    this.val = val;
    this.next = null;
};

var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this.size = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index >= this.size || index < 0) {
        return -1;
    }
    let node = this.head;
    for (let i = 0; i < index; i++) {
        node = node.next;
    }
    return node.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const node = this.head;
    const added = new ListNode(val);
    if (!node) {
        this.head = added;
        this.tail = added;
    } else {
        added.next = node;
        this.head = added;
    }
    this.size++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = this.tail;
    const added = new ListNode(val);
    if (!node) {
        this.head = added;
        this.tail = added;
    } else {
        this.tail.next = added;
        this.tail = added;
    }
    this.size++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.size) {
        return;
    }
    if (index <= 0) {
        return this.addAtHead(val);
    } 
    if (index === this.size) {
        return this.addAtTail(val);
    }
    let node = this.head;
    let added = new ListNode(val);
    for (let i = 0; i < index - 1; i++) {
        node = node.next;
    }
    added.next = node.next; 
    node.next = added;
    this.size++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) {
        return 
    }
    if (index === 0) {
        this.head = this.head.next;
        this.size--;
        return;
    }
    let node = this.head;
    for (let i = 0; i < index - 1; i++) {
        node = node.next;
    }
    node.next = node.next.next;
    if (!node.next) {
        this.tail = node;
    }
    this.size--;
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
