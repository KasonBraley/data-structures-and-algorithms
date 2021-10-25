const { describe, expect, test } = require("@jest/globals");
const { LinkedList } = require("../LinkedList.js");

describe("Testing Linked List implementation", () => {
  let list = new LinkedList();

  it("Should instantiate an empty linked list", () => {
    expect(typeof list).toBe("object");
    expect(list.head).toBeNull();
  });

  it("Should insert into the linked list, and the head property will pointh to the first node", () => {
    list.insert("testing123");
    expect(list.head.value).toBe("testing123");
    expect(list.head.next).toBeNull();
  });

  it("Should be able to insert multiple nodes, and verify they were inserted", () => {
    list.insert("second insertion");
    list.insert("third insertion");
    expect(list.includes("second insertion")).toBeTruthy();
    expect(list.includes("third insertion")).toBeTruthy();
    expect(list.includes("invalid value")).toBeFalsy();
  });

  it("Should return a string of all the values in the linked list", () => {
    const allValues = list.toString();
    expect(allValues).toBe(
      "third insertion -> second insertion -> testing123 -> NULL"
    );
  });
});
