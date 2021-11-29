const { describe, expect, test } = require("@jest/globals")
const HashTable = require("../hashTable.js")

describe("Hash Table", () => {
  let table = new HashTable(1024)

  test("Hash method returns an index of type number", () => {
    let index = table.hash("Hello")
    expect(typeof index).toBe("number")
    expect(index).toBe(492)
  })

  test("Can add a key value pair succesfully", () => {
    table.add("hello", "world")
    expect(table.contains("hello")).toBeTruthy()
    expect(table.get("hello")).toBe("world")
  })

  test("Returs the correct value for incorrect keys", () => {
    table.add("hello", "world")
    expect(table.contains("bye")).toBeFalsy()
  })

  test("Can handle a hash collision", () => {
    let table = new HashTable(2)
    table.add("hello", "world")
    table.add("hey", "there")
    let hello = table.hash("hello")
    let goodbye = table.hash("hey")
    expect(table.map[hello].head.value).toMatchObject({ hello: "world" })
    expect(table.map[hello].head.next.value).toMatchObject({ hey: "there" })
  })

  test("Can retrieve a value with 'get' from a bucket that has a collision", () => {
    let table = new HashTable(2)
    table.add("hello", "world")
    table.add("hey", "there")
    let hello = table.hash("hello")
    let goodbye = table.hash("hey")
    expect(table.get("hey")).toBe("there")
  })
})
