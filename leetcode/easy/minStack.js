/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.storage = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  if (!this.storage.length) {
    this.storage = [...this.storage, {val, min: val}];
  } else {
    const min = this.storage[this.storage.length - 1].min;
    const obj = {val, min: Math.min(min, val)};
    this.storage = [...this.storage, obj];
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const popped = this.storage[this.storage.length - 1].val;
  this.storage.length--;
  return popped;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.storage[this.storage.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
   return this.storage[this.storage.length - 1].min; 
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
