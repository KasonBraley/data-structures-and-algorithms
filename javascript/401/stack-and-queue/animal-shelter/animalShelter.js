const Stack = require("../stack.js")
const Queue = require("../queue.js")

class AnimalShelter {
  #dogs
  #cats
  constructor() {
    this.#dogs = new Queue()
    this.#cats = new Queue()
  }

  enqueue(animal) {
    if (pref !== "dog" || pref !== "cat") {
      throw new Error("Valid animals are 'dog' or 'cat'")
    }

    if (animal === "dog") {
      this.#dogs.enqueue(animal)
      return
    }
    this.#cats.enqueue(animal)
  }

  dequeue(pref) {
    if (pref !== "dog" || pref !== "cat") {
      return null
    }

    if (pref === "dog") {
      return this.#dogs.dequeue()
    }

    return this.#cats.dequeue()
  }

  getDogs() {
    return this.#dogs.front
  }

  getCats() {
    return this.#cats.front
  }
}

module.exports = AnimalShelter
