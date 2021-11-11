const Queue = require("../../stack-and-queue/queue.js")

function fizzBuzz(value) {
  if (value % 3 === 0) {
    if (value % 5 === 0) {
      value = "FizzBuzz"
    } else {
      value = "Fizz"
    }
  } else if (value % 5 === 0) {
    value = "Buzz"
  } else {
    value = value.toString()
  }
  return value
}

function fizzBuzzTree(karyTree) {
  if (!karyTree) {
    throw new Error("Missing parameter")
  }

  let treeValues = []

  const queue = new Queue()
  queue.enqueue(karyTree.root)

  while (!queue.isEmpty()) {
    const root = queue.dequeue()
    if (root) {
      let fizzBuzzValue = fizzBuzz(root.value)
      treeValues.push(fizzBuzzValue)
      for (let child of root.children) {
        queue.enqueue(child)
      }
    }
  }

  return treeValues
}

module.exports = fizzBuzzTree
