const repository = require('./repository')

module.exports = {
  casesByRegion() {
    response = repository.casesByRegion('BR')

    if (response === null || response.confirmed === 0) {
      return 'Ainda não aconteceu nenhum caso na região'
    } else {
      return `Na região aconteceram ${response.confirmed} casos até agora`
    }
  }
};