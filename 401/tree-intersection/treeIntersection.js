// Find common values in 2 binary trees.
let HashTable = require("../hashtable/hashTable.js")

function treeIntersection(tree1, tree2) {
  let hashTable = new HashTable(100)
  let commonValues = []

  function cb(value) {
    hashTable.add(value.toString(), value)
  }

  tree1.preOrder(tree1.root, cb)

  function cb2(value) {
    if (hashTable.contains(value.toString())) {
      commonValues.push(value)
    }
  }

  tree2.preOrder(tree2.root, cb2)

  return commonValues
}

module.exports = treeIntersection
