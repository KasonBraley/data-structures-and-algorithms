/*
Input	                                Output

[Metroville, Pandora, ]              	True, $82
[Arendelle, New Monstropolis, Naboo]	True, $115
[Naboo, Pandora]	                    False, $0
[Narnia, Arendelle, Naboo]            False, $0

*/

// Determine whether the trip is possible with direct flights, and how much it would cost.

const { describe, expect, test } = require("@jest/globals")
const { Graph, Vertex } = require("../graph.js")
const businessTrip = require("../businessTrip.js")

describe("Business trip", () => {
  let graph = new Graph()

  let Pandora = new Vertex("Pandora")
  let Narnia = new Vertex("Narnia")
  let Metroville = new Vertex("Metroville")
  let Arendelle = new Vertex("Arendelle")
  let Monstropolis = new Vertex("Monstropolis")
  let Naboo = new Vertex("Naboo")

  graph.addVertex(Pandora)
  graph.addVertex(Narnia)
  graph.addVertex(Metroville)
  graph.addVertex(Arendelle)
  graph.addVertex(Monstropolis)
  graph.addVertex(Naboo)

  graph.addDirectedEdge(Pandora, Arendelle, 150)
  graph.addDirectedEdge(Pandora, Metroville, 82)
  graph.addDirectedEdge(Narnia, Naboo, 250)
  graph.addDirectedEdge(Narnia, Metroville, 37)
  graph.addDirectedEdge(Naboo, Metroville, 26)
  graph.addDirectedEdge(Naboo, Narnia, 250)
  graph.addDirectedEdge(Naboo, Monstropolis, 73)
  graph.addDirectedEdge(Monstropolis, Naboo, 73)
  graph.addDirectedEdge(Monstropolis, Arendelle, 42)
  graph.addDirectedEdge(Monstropolis, Metroville, 105)
  graph.addDirectedEdge(Arendelle, Pandora, 150)
  graph.addDirectedEdge(Arendelle, Monstropolis, 42)
  graph.addDirectedEdge(Arendelle, Metroville, 99)
  graph.addDirectedEdge(Metroville, Pandora, 82)
  graph.addDirectedEdge(Metroville, Narnia, 37)
  graph.addDirectedEdge(Metroville, Monstropolis, 105)
  graph.addDirectedEdge(Metroville, Arendelle, 99)
  graph.addDirectedEdge(Metroville, Naboo, 26)

  test("Metroville to Pandora", () => {
    expect(businessTrip(graph, [Metroville, Pandora])).toBe(82)
  })

  test("Naboo to Pandora", () => {
    expect(businessTrip(graph, [Naboo, Pandora])).toBe(null)
  })

  test("Arendelle to Monstropolis to Naboo", () => {
    expect(businessTrip(graph, [Arendelle, Monstropolis, Naboo])).toBe(115)
  })

  test("Narnia, Arendelle, Naboo", () => {
    expect(businessTrip(graph, [Narnia, Arendelle, Naboo])).toBe(null)
  })
})
