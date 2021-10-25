class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  includes(value) {
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
}

// let list = new LinkedList();
// list.insert(1);
// list.insert(2);
// list.insert(3);
// list.insert("string");
// list.insert(5);

// console.log("includes 3?", list.includes(3)); // true
// console.log("includes 6?", list.includes(6)); // false

// console.log(list.toString());

module.exports = { Node, LinkedList };
