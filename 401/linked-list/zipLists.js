const { LinkedList } = require("./LinkedList.js")

function zipLists(list1, list2) {
  let list1Current = list1.head
  let list2Current = list2.head

  while (list1Current && list2Current) {
    let temp = list1Current.next
    list1Current.next = list2Current
    list1Current = list1Current.next
    list2Current = temp
  }
  return list1
}

// testing

let list = new LinkedList()
list.insert(3)
list.insert(2)
list.insert(1)
// console.log(list.toString());

let list2 = new LinkedList()
list2.insert(6)
list2.insert(5)
list2.insert(4)
// console.log(list2.toString());

console.log(zipLists(list, list2).toString())
