const { describe, expect, test } = require("@jest/globals")
const HashTable = require("../hashTable.js")
const leftJoin = require("../leftJoin.js")

describe("Left Join hash table", () => {
  test("Should left join two hash tables", () => {
    let table = new HashTable(300)
    table.add("fond", "enamored")
    table.add("wrath", "anger")
    table.add("diligent", "employed")
    table.add("outfil", "garb")
    table.add("guide", "usher")

    let table2 = new HashTable(300)
    table2.add("fond", "averse")
    table2.add("wrath", "delight")
    table2.add("diligent", "idle")
    table2.add("guide", "follow")
    table2.add("flow", "jam")

    expect(leftJoin(table, table2)).toMatchObject([
      ["wrath", "anger", "delight"],
      ["diligent", "employed", "idle"],
      ["guide", "usher", "follow"],
      ["fond", "enamored", "averse"],
      ["outfil", "garb", null],
    ])
  })

  test("Won't add a key/value to the result if the first hash table does not have that key", () => {
    let table = new HashTable(300)
    table.add("fond", "enamored")
    table.add("diligent", "employed")
    table.add("outfil", "garb")
    table.add("guide", "usher")

    let table2 = new HashTable(300)
    table2.add("fond", "averse")
    table2.add("wrath", "delight")
    table2.add("diligent", "idle")
    table2.add("guide", "follow")
    table2.add("flow", "jam")

    expect(leftJoin(table, table2)).toMatchObject([
      ["diligent", "employed", "idle"],
      ["guide", "usher", "follow"],
      ["fond", "enamored", "averse"],
      ["outfil", "garb", null],
    ])
  })

  test("Returns a null value for missing values in the right hash table", () => {
    let table = new HashTable(300)
    table.add("fond", "enamored")
    table.add("wrath", "anger")
    table.add("diligent", "employed")
    table.add("outfil", "garb")
    table.add("guide", "usher")

    let table2 = new HashTable(300)

    expect(leftJoin(table, table2)).toMatchObject([
      ["wrath", "anger", null],
      ["diligent", "employed", null],
      ["guide", "usher", null],
      ["fond", "enamored", null],
      ["outfil", "garb", null],
    ])
  })
})
