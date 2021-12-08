const { describe, expect, test } = require("@jest/globals")
const { Graph, Vertex } = require("../graph.js")

describe("Graph implementation", () => {
  test("Node can be successfully added to the graph", () => {
    let graph = new Graph()

    let A = new Vertex("A")
    graph.addVertex(A)
    expect(graph.adjacencyList.size).toBe(1)
  })
})
