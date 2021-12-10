// Determine whether the trip is possible with direct flights, and how much it would cost.

function businessTrip(graph, cities) {
  let cost = null

  for (let i = 0; i < cities.length; i++) {
    let contains = graph.getNeighbors(cities[i]).some((city) => {
      if (cities[i + 1]) {
        return city.vertex.value === cities[i + 1].value
      }
    })

    if (contains) {
      let directFlight = graph.getNeighbors(cities[i]).filter((city) => {
        return city.vertex.value === cities[i + 1].value
      })[0]

      cost += directFlight.weight
    }
  }

  return cost
}

module.exports = businessTrip
