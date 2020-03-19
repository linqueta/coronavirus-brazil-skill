const data = [
  { region: "AC", ss: 3, ms: 0, date: "2020-03-18" },
  { region: "AL", ss: 1, ms: 1, date: "2020-03-18" },
  { region: "AP", ss: 0, ms: 0, date: "2020-03-18" },
  { region: "AM", ss: 2, ms: 1, date: "2020-03-18" },
  { region: "BA", ss: 28, ms: 3, date: "2020-03-18" },
  { region: "CE", ss: 11, ms: 5, date: "2020-03-18" },
  { region: "DF", ss: 34, ms: 22, date: "2020-03-18" },
  { region: "ES", ss: 11, ms: 1, date: "2020-03-18" },
  { region: "GO", ss: 12, ms: 6, date: "2020-03-18" },
  { region: "MA", ss: 0, ms: 0, date: "2020-03-18" },
  { region: "MT", ss: 0, ms: 0, date: "2020-03-18" },
  { region: "MS", ss: 6, ms: 4, date: "2020-03-18" },
  { region: "MG", ss: 19, ms: 7, date: "2020-03-18" },
  { region: "PA", ss: 1, ms: 0, date: "2020-03-18" },
  { region: "PB", ss: 1, ms: 0, date: "2020-03-18" },
  { region: "PR", ss: 14, ms: 6, date: "2020-03-18" },
  { region: "PE", ss: 22, ms: 16, date: "2020-03-18" },
  { region: "PI", ss: 0, ms: 0, date: "2020-03-18" },
  { region: "RJ", ss: 63, ms: 33, date: "2020-03-18" },
  { region: "RN", ss: 1, ms: 1, date: "2020-03-18" },
  { region: "RS", ss: 19, ms: 10, date: "2020-03-18" },
  { region: "RO", ss: 0, ms: 0, date: "2020-03-18" },
  { region: "RR", ss: 0, ms: 0, date: "2020-03-18" },
  { region: "SC", ss: 14, ms: 7, date: "2020-03-18" },
  { region: "SP", ss: 164, ms: 164, date: "2020-03-18" },
  { region: "SE", ss: 6, ms: 4, date: "2020-03-18" },
  { region: "TO", ss: 1, ms: 0, date: "2020-03-18" },
  { region: "BR", ss: 509, ms: 291, date: "2020-03-18", suspected: 8819, deaths: 4 }
]

module.exports = {
  casesByRegion(id) {
    return data.filter(element => element.region == id)
      .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))[0]
  }
};