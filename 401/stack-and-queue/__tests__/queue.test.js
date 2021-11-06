const { describe, expect, test } = require("@jest/globals")
const Queue = require("../queue.js")

let queue = new Queue()

describe("Queue functionality", () => {
  test("enqueue onto queue", () => {
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.front.value).toBe(1)
    expect(queue.front.next.value).toBe(2)
  })

  test("dequeue off queue", () => {
    queue.dequeue()
    expect(queue.front.value).toBe(2)
    queue.dequeue()
    expect(queue.front).toBeNull()
  })

  test("Peek the queue", () => {
    queue.enqueue(1)
    expect(queue.peek()).toBe(1)
  })

  test("Queue error handling", () => {
    queue.dequeue()
    expect(queue.dequeue).toThrow(new Error("Empty queue"))

    expect(queue.peek).toThrow(new Error("Empty queue"))
  })

  test("Instantiate empty queue", () => {
    let queue2 = new Queue()
    expect(queue2.front).toBeNull()
  })
})
