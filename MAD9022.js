//https://mad9022.github.io/W2022/modules/week1/data-structures/#stacks
let a1 = new Array();
let a2 = [];
let a3 = new Array(3);

a2[78] = 5; // add the number 5 to index 75. the length of array will be 79
a2.forEach((element) => {
  console.log(element);
}); // output 78 as the is the only value in the array

for (let index = 0; index < a2.length; index++) {
  const element = a2[index];
  // console.log(index, element);
  // will output the index `undefined` 77 times then 78 78.
}
//make all A
let sometext = 'hello world how are you doing';
let split = sometext.split(' ').sort();
console.log(split);

let split2 = sometext.split('are');
console.log(split2);

let split3 = sometext.split('');
console.log(split3);

let split4 = sometext.split('-'); // add string as one index in array
console.log(split4);

let join = split.join('-');
console.log(join);

let join2 = split.join('');
console.log(join2);

let allTogether = sometext.split(' ').sort().join(' ');
console.log(allTogether);

let data = {
  id: 123,
  name: 'Bilbo',
  weapon: 'Sting',
};

let obj2 = {
  id: 456,
  [data]: 'his name is Bilbo', //wrap the variable in square brackets to reference it
};

for (let prop in obj2) {
  console.log(prop);
}

console.log(obj2[data]);
// printf(obj2);
let data2 = {
  id: 50505,
};
console.log((obj2[data2] = 'his name is hani'));

let obj3 = {
  one: data,
  two: data2,
};

console.log(obj3);

// make an array ten names
let dwarves = ['hani', 'issa', 'onew', 'two', 'three'];
dwarves.forEach(output);
dwarves.forEach((item, index, array) => {
  console.log(index, item, array);
});
function output(item, index, array) {
  console.log(index, item);
}

// sets
let names = new Set();
names.add('Bilbo');
names.add('Frodo');
names.add('Bilbo'); //not add it again
names.add('Sam');
names.add('Sam');
console.log(names.size);
names.delete('Bilbo');
console.log(names);
console.log(names.has('Sam'));
names.forEach((name) => {
  console.log(name);
});
names.clear();
console.log(names);

// maps
let m = new Map();
m.set('id', 123);
m.set('name', 'Bilbo');
m.has('id');
m.set('weapon', 'Sting');
m.delete('weapon');
// m.clear();
console.log(m.get('name'));
console.log(m);
console.log(m.size);
// Maps and Sets also have keys(), values(), and entries()
for (let key of m.keys()) {
  console.log(key);
}

// stakc LIFO (last in first out)
// function Stack() {
//   this.dataStore = [];
//   this.top = 0;
//   this.push = push;
//   this.pop = pop;
//   this.peek = peek;
//   this.clear = clear;
//   this.length = length;
// }

/**
 *  Stacks
  The Stack follows a LIFO last-in-first-out model where the last
  item added to the stack is the first item removed. So, we are
  basically talking about the Array pop and push methods. It will
  also need to have a size method (like the Map and Set types
 */
function Stack() {
  this._storage = new Map();
  // we could use  other structrues instead of map
  // if we use a string then it will need a spearator
  this._index = 0;
  // index will be the length|size
  // it will also be the next number to use for adding an item
}
Stack.prototype.push = function (item) {
  // add to the stack
  this._storage.set(this._index++, item);
  // increment after adding the item
};
Stack.prototype.pop = function () {
  // decrement index before using it
  let item = this._storage.get(--this._index);
  // remove from the stack
  this._storage.delete(this._index);
  // return the removed item
  return item;
};

Stack.prototype.peek = function () {
  // see an item without removing it
  return this._storage.get(this._index - 1);
};
Stack.prototype.size = function () {
  // determine the size of the stack
  return this._index;
};

let pets = new Stack();
pets.push('dog');
pets.push('cat');
console.log(pets.size());
console.log(pets.peek());
// console.log(pets.pop());
console.log(pets);

// queue FIFO (first in first out)

/**
 * Queues
  Queues are similar to a stack except for the order in which
  items are added. In the case of a queue, the first item in is
  the first item out - FIFO. Rather than push() and pop() methods,
  a queue has an enqueue() method for adding items and a dequeue()
  method for removing item

  If we think about this in terms of an Array the enqueue
  method is like the push and the dequeue method is like
  the shift method.
 */
function Queue() {
  this._storage = {};
  this._head = 0; //key for next in line
  this._tail = 0; //key for last in line
  // head and tail are both numbers but when used as objext keys
  // they will be converted to string value before accessing the
  // object
}
Queue.prototype.enqueue = function (value) {
  this._storage[this._tail++] = value;
  return this.count();
};

Queue.prototype.dequeue = function () {
  let element = this._storage[this._head];
  delete this._storage[this._head];
  if (this._head < this._tail) this._head++;
  return element;
};

Queue.prototype.peek = function () {
  return this._storage[this._head];
};

Queue.prototype.count = function () {
  return this._tail - this._head;
};

Queue.prototype.contains = function (value) {
  for (var i = this._head; i < this._tail; i++) {
    if (this._storage[i] === value) return true;
  }
  return false;
};
let q = new Queue();
q.enqueue('dog');
q.enqueue('cat');
q.enqueue('mouse');
console.log(q.count()); // 3
console.log(q.contains('dog')); // true
console.log(q.peek()); // dog
console.log(q.dequeue()); // dog

//  Linked List
//The node contructor
function Node(value) {
  this.next = null; // the last nod will have null as next value
  this.value = value;
}
// The LinkedList constructor
function LinkedList(headValue) {
  if (headValue === undefined)
    console.error('Most provide a vlaue for first node');
  this.head = new Node(headValue);
  this.tail = this.head; //means only one node in LinkedList
}
LinkedList.prototype.forEach = function (callback) {
  let node = this.head;
  while (node) {
    callback(node.value); //pass the value, not the whole node to the callback
    node = node.next;
  }
};

LinkedList.prototype.print = function () {
  let result = [];
  this.forEach(function (value) {
    result.push(value);
  });
  return result.join(', ');
};

LinkedList.prototype.insetAfter = function (node, value) {
  // get reference to former next
  let oldNext = node.next;
  // create new node
  let newNext = new Node(value);
  // store it as the new `next`
  node.next = newNext;
  //set `next` for the new node to be the old `next`
  newNext.next = oldNext;
  // if reference node is tail, set tail to newNext
  if (this.tail === node) this.tail = newNext;
  return newNext;
};

LinkedList.prototype.insertHead = function (value) {
  let newHead = new Node(value);
  let oldHead = this.head;
  this.head = newHead;
  newHead.next = oldHead;
  return this.head;
};

LinkedList.prototype.removeHead = function () {
  let oldHead = this.head;
  let newHead = oldHead.next;
  this.head = newHead;
  oldHead.next = null;
  return oldHead;
};
LinkedList.prototype.findNode = function (value) {
  let node = this.head;
  while (node) {
    if (node.value === value) return node; //exit when found
    node = node.next;
  }
  return 'No node with value :' + value + ' found';
};

LinkedList.prototype.appendToTail = function (value) {
  let newTail = new Node(value);
  //With myList.tail property: O(1)
  this.tail.next = newTail;
  this.tail = newTail;
  return this.tail;
};

let myList = new LinkedList(1);
myList.appendToTail(2);
myList.appendToTail(3);
myList.appendToTail(4);
console.log(myList.print());
console.log(myList.findNode(3));
