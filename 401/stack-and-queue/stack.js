const Node = require("./node.js")

/*
FILO
LIFO
*/

class Stack {
  constructor() {
    this.top = null
  }

  push = (value) => {
    let nodeToAdd = new Node(value)
    nodeToAdd.next = this.top
    this.top = nodeToAdd
  }

  pop = () => {
    if (this.isEmpty()) throw new Error("Empty stack")

    let currentTop = this.top
    this.top = currentTop.next

    return currentTop.value
  }

  peek = () => {
    if (this.isEmpty()) throw new Error("Empty stack")

    return this.top.value
  }

  isEmpty = () => {
    if (!this.top) return true

    return false
  }
}

module.exports = Stack
