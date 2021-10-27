class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  includes(value) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    let currentNode = this.head;
    let result = "";

    while (currentNode) {
      result = result + currentNode.value + " -> ";
      currentNode = currentNode.next;
    }
    return result + "NULL";
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  insertBefore(value, newValue) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode) {
      if (currentNode.value === value) {
        const newNode = new Node(newValue, currentNode);

        if (previousNode) {
          previousNode.next = newNode;
        }
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    return this;
  }

  insertAfter(value, newValue) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        const newNode = new Node(newValue, currentNode);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }
      currentNode = currentNode.next;
    }
    return this;
  }

  kthFromEnd(k) {
    let current = this.head;
    let length = 0;
    let array = [];

    while (current) {
      array.push(current.value);
      length++;
      current = current.next;
    }

    if (k < 0) {
      return "Provide a positive number";
    }

    if (k >= length) {
      return "Provide a smaller number";
    }

    let lastIndexPosition = length - k - 1;
    return array[lastIndexPosition];
  }
}

let list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert("string");
list.insert(5);
list.append("mango");
console.log("includes 3?", list.includes(3)); // true
console.log("includes 6?", list.includes(6)); // false

console.log(list.toString());
// list.insertBefore(3, "testBefore");
// list.insertAfter(2, "testAfter");
console.log(list.toString());
console.log(list.kthFromEnd(-1));

module.exports = { Node, LinkedList };
