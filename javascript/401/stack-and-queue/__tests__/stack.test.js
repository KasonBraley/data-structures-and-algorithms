const { describe, expect, test } = require("@jest/globals")
const Stack = require("../stack.js")

let stack = new Stack()

describe("Stack functionality", () => {
  test("Push onto stack", () => {
    stack.push(1)
    stack.push(2)
    expect(stack.top.value).toBe(2)
    expect(stack.top.next.value).toBe(1)
  })

  test("Pop off stack", () => {
    stack.pop()
    expect(stack.top.value).toBe(1)
    stack.pop()
    expect(stack.top).toBeNull()
  })

  test("Peek the stack", () => {
    stack.push(1)
    expect(stack.peek()).toBe(1)
  })

  test("Stack error handling", () => {
    stack.pop()
    expect(stack.pop).toThrow(new Error("Empty stack"))

    expect(stack.peek).toThrow(new Error("Empty stack"))
  })

  test("Instantiate empty stack", () => {
    let stack2 = new Stack()
    expect(stack2.top).toBeNull()
  })
})
