function insertShiftArray(array, x) {
  let temp = []
  let flag = false
  let length = array.length

  // even length array
  if (length % 2 === 0) {
    for (let i = 0; i < array.length + 1; i++) {
      console.log("flag", flag)
      console.log("index", i)
      if (i == array.length / 2) {
        temp[i] = x
        flag = true
        continue
      }
      if (flag === true) {
        temp[i] = array[i - 1]
        continue
      }
      temp[i] = array[i]
    }
  } else {
    // odd length array
  }

  return temp
}

let test = insertShiftArray([1, 2, 3, 4], 6)
console.log(test)
