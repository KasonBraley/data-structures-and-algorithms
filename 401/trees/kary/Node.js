class Node {
  constructor(value, k = 0) {
    this.value = value

    if (typeof k === "number") {
      this.children = new Array(k)
    } else {
      throw new Error("k must be of type 'number'")
    }
  }
}

module.exports = Node
