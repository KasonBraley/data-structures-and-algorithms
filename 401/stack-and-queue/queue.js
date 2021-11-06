const Node = require("./node.js")

class Queue {
  constructor() {
    this.front = null
    this.rear = null
  }

  enqueue = (value) => {
    let currentRear = this.rear
    const nodeToAdd = new Node(value)

    if (currentRear) {
      currentRear.next = nodeToAdd
    }

    this.rear = nodeToAdd

    if (!this.front) {
      this.front = nodeToAdd
    }
  }

  dequeue = () => {
    if (this.isEmpty()) {
      throw new Error("Empty queue")
    }

    let currentFront = this.front
    this.front = currentFront.next

    if (this.rear === currentFront) {
      this.rear = currentFront.next
    }

    return currentFront.value
  }

  peek = () => {
    if (this.isEmpty()) {
      throw new Error("Empty queue")
    }

    return this.front.value
  }

  isEmpty = () => {
    if (!this.front) {
      return true
    }
    return false
  }

  getSize() {
    let count = 0
    let front = this.front
    while (front) {
      count += 1
      front = front.next
    }
    return count
  }
}

module.exports = Queue
