const regions = [
  {
    name: "BR",
    occurrences: [
      { created_at: "2020-03-17T19:34:21-03:00", confirmed: 200 }
    ]
  }
]

module.exports = {
  casesByRegion(region) {
    region = regions.find(element => element.name == region)
    if (region === null) {
      return { confirmed: 0 }
    } else {
      return region.occurrences.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))[0]
    }
  }
};