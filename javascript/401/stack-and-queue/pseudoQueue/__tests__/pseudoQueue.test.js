const { describe, expect, test } = require("@jest/globals")
const PseudoQueue = require("../pseudoQueue.js")

let pseudoQueue = new PseudoQueue()

describe("PseudoQueue functionality", () => {
  test("Enqueue", () => {
    pseudoQueue.enqueue(1)
    pseudoQueue.enqueue(2)
    pseudoQueue.enqueue(3)
    expect(pseudoQueue.getStack1().value).toBe(3)
    expect(pseudoQueue.getStack1().next.value).toBe(2)
    expect(pseudoQueue.getStack1().next.next.value).toBe(1)
  })

  test("Dequeue", () => {
    expect(pseudoQueue.dequeue()).toBe(1)
    expect(pseudoQueue.dequeue()).toBe(2)
    expect(pseudoQueue.getStack2().value).toBe(3)
    expect(pseudoQueue.dequeue()).toBe(3)
    expect(() => pseudoQueue.dequeue()).toThrow(new Error("Empty Queue"))
  })
})
