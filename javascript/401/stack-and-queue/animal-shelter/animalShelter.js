const Queue = require("../queue.js")
const removeSpecificQueueElement = require("../removeSpecificQueueElement.js")

class AnimalShelter {
  #dogs
  #cats
  #shelter

  constructor() {
    this.#shelter = new Queue()
    this.#dogs = new Queue()
    this.#cats = new Queue()
  }

  enqueue(animal) {
    if (animal.animal !== "dog" && animal.animal !== "cat") {
      throw new Error("Valid animals are 'dog' or 'cat'")
    }

    if (animal.animal === "dog") {
      this.#dogs.enqueue(animal)
      this.#shelter.enqueue(animal)
      return
    }
    this.#cats.enqueue(animal)
    this.#shelter.enqueue(animal)
  }

  dequeue(pref) {
    if (pref !== "dog" && pref !== "cat") {
      if (typeof pref === "undefined") {
        let adoptedAnimal = this.#shelter.dequeue()
        if (adoptedAnimal.animal === "dog") {
          this.#dogs.dequeue()
        } else {
          this.#cats.dequeue()
        }

        return adoptedAnimal
      }
      return null
    }

    if (pref === "dog") {
      let adoptedDog = this.#dogs.dequeue()
      removeSpecificQueueElement(this.#shelter, adoptedDog)
      return adoptedDog
    } else {
      let adoptedCat = this.#cats.dequeue()
      removeSpecificQueueElement(this.#shelter, adoptedCat)
      return adoptedCat
    }
  }

  getDogs() {
    return this.#dogs.front
  }

  getCats() {
    return this.#cats.front
  }

  getShelterAnimals() {
    return this.#shelter.front
  }
}

module.exports = AnimalShelter
