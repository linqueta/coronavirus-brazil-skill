const data = [
  { region: "AC", ss: 3, ms: 0, date: "2020-03-18", suspected: 12, deaths: 0 },
  { region: "AL", ss: 1, ms: 1, date: "2020-03-18", suspected: 12, deaths: 0 },
  { region: "AP", ss: 0, ms: 0, date: "2020-03-18", suspected: 15, deaths: 0 },
  { region: "AM", ss: 2, ms: 1, date: "2020-03-18", suspected: 18, deaths: 0 },
  { region: "BA", ss: 28, ms: 3, date: "2020-03-18", suspected: 573, deaths: 0 },
  { region: "CE", ss: 11, ms: 9, date: "2020-03-18", suspected: 493, deaths: 0 },
  { region: "DF", ss: 34, ms: 26, date: "2020-03-18", suspected: 327, deaths: 0 },
  { region: "ES", ss: 11, ms: 9, date: "2020-03-18", suspected: 71, deaths: 0 },
  { region: "GO", ss: 12, ms: 8, date: "2020-03-18", suspected: 353, deaths: 0 },
  { region: "MA", ss: 0, ms: 0, date: "2020-03-18", suspected: 125, deaths: 0 },
  { region: "MT", ss: 0, ms: 0, date: "2020-03-18", suspected: 45, deaths: 0 },
  { region: "MS", ss: 6, ms: 7, date: "2020-03-18", suspected: 93, deaths: 0 },
  { region: "MG", ss: 19, ms: 15, date: "2020-03-18", suspected: 925, deaths: 0 },
  { region: "PA", ss: 1, ms: 0, date: "2020-03-18", suspected: 43, deaths: 0 },
  { region: "PB", ss: 1, ms: 0, date: "2020-03-18", suspected: 85, deaths: 0 },
  { region: "PR", ss: 14, ms: 13, date: "2020-03-18", suspected: 400, deaths: 0 },
  { region: "PE", ss: 22, ms: 16, date: "2020-03-18", suspected: 89, deaths: 0 },
  { region: "PI", ss: 0, ms: 0, date: "2020-03-18", suspected: 12, deaths: 0 },
  { region: "RJ", ss: 63, ms: 45, date: "2020-03-18", suspected: 1.254, deaths: 0 },
  { region: "RN", ss: 1, ms: 1, date: "2020-03-18", suspected: 108, deaths: 0 },
  { region: "RS", ss: 19, ms: 19, date: "2020-03-18", suspected: 416, deaths: 0 },
  { region: "RO", ss: 0, ms: 0, date: "2020-03-18", suspected: 61, deaths: 0 },
  { region: "RR", ss: 0, ms: 0, date: "2020-03-18", suspected: 9, deaths: 0 },
  { region: "SC", ss: 14, ms: 10, date: "2020-03-18", suspected: 346, deaths: 0 },
  { region: "SP", ss: 164, ms: 240, date: "2020-03-18", suspected: 5.334, deaths: 4 },
  { region: "SE", ss: 6, ms: 5, date: "2020-03-18", suspected: 15, deaths: 0 },
  { region: "TO", ss: 1, ms: 0, date: "2020-03-18", suspected: 13, deaths: 0 },
  { region: "BR", ss: 509, ms: 428, date: "2020-03-18", suspected: 11.278, deaths: 4 }
]

module.exports = {
  casesByRegion(id) {
    return data.filter(element => element.region == id)
      .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))[0]
  }
};