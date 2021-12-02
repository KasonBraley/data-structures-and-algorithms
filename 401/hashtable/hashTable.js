const LinkedList = require("../linked-list/LinkedList.js")

class HashTable {
  constructor(size) {
    this.size = size
    this.map = new Array(size)
  }

  hash(key) {
    let sum = 0
    // loop through the string
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i)
    }

    return (sum * 599) % this.size
  }

  add(key, value) {
    // hash the key to get the position
    let index = this.hash(key)

    // look at that buckets value
    let bucket = this.map[index]
    let payload = {
      [key]: value,
    }

    // if there is something there we can assume bucket is a linked list and append
    if (bucket) {
      bucket.append(payload)
    } else {
      // if nothing is there, let instantiate a new Linked list and add that to our bucket at our index value.
      let list = new LinkedList()
      list.append(payload)
      this.map[index] = list
    }
  }

  // returns value associated with that key in the table
  get(key) {
    let index = this.hash(key)

    if (this.map[index]) {
      // check if LL and then traverse it until key found
      let current = this.map[index].head

      while (current) {
        // required obj access like this since key is a number
        if (current.value[key]) {
          return current.value[key]
        }
        current = current.next
      }
    }

    return null
  }

  // returns boolean indicating if the key exists in the table already
  contains(key) {
    let index = this.hash(key)

    if (this.map[index]) {
      let current = this.map[index].head

      while (current) {
        // required obj access like this since key is a number
        if (current.value[key]) {
          return true
        }
        current = current.next
      }
    }

    return false
  }
}

module.exports = HashTable
