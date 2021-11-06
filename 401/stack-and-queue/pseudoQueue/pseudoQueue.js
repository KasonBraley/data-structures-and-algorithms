const Stack = require("../stack.js")

// testing out private fields
class PseudoQueue {
  #stack1
  #stack2

  constructor() {
    this.#stack1 = new Stack()
    this.#stack2 = new Stack()
  }

  enqueue(value) {
    this.#stack1.push(value)
  }

  dequeue() {
    // handle both empty stacks
    if (this.#stack1.isEmpty() && this.#stack2.isEmpty()) {
      throw new Error("Empty Queue")
    }

    // handle empty stack2
    if (this.#stack2.isEmpty()) {
      while (!this.#stack1.isEmpty()) {
        this.#stack2.push(this.#stack1.top.value)
        this.#stack1.pop()
      }
    }

    let stack2Top = this.#stack2.top.value
    this.#stack2.pop()
    return stack2Top
  }

  getStack1() {
    return this.#stack1.top
  }

  getStack2() {
    return this.#stack2.top
  }
}

module.exports = PseudoQueue
