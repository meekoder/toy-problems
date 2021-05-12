/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.storage = new Array(); 
  this.length = 0; 
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.storage[this.length] = x; 
  this.length++;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  const head = this.storage[0];
  for (let i = 1; i < this.length + 1; i++) {
    this.storage[i - 1] = this.storage[i];
  }
  this.length--;
  return head;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
   return this.storage[0]; 
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
   return this.length > 0 ? false : true; 
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
