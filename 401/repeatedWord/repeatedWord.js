/* 
Write a function called repeated word that finds the first word to occur more than once in a string
Arguments: string
Return: string 
*/

function repeatedWord(string) {
  let tempArr = []
  let stringArr = string.toLowerCase().split(/\W+/) // splits on `Non word characters. Alphanumeric and underscore`

  let found = null

  for (let i = 0; i < stringArr.length; i++) {
    if (tempArr.includes(stringArr[i])) {
      found = stringArr[i]
      break
    }
    tempArr.push(stringArr[i])
  }

  return found
}

module.exports = repeatedWord
