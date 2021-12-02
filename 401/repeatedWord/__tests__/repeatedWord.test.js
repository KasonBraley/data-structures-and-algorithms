const { describe, expect, test } = require("@jest/globals")
const repeatedWord = require("../repeatedWord.js")

describe("Find the first repeated word in a string", () => {
  let string1 = "Once upon a time, there was a brave knight who..."

  let string2 =
    "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."

  let string3 =
    "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."

  let string4 = "hey,. this! should . . . .. ./o.ua work \ hope f! u@ ll? yyyy+ yyy this"

  test("It should work", () => {
    let result = repeatedWord(string1)
    expect(result).toBe("a")
  })

  test("It should work for a longer string", () => {
    let result = repeatedWord(string2)
    expect(result).toBe("it")
  })

  test("Another string", () => {
    let result = repeatedWord(string3)
    expect(result).toBe("summer")
  })

  test("Weird string", () => {
    let result = repeatedWord(string4)
    expect(result).toBe("this")
  })
})
