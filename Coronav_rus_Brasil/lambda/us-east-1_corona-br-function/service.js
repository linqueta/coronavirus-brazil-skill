const repository = require('./repository')

const withoutCasesMsg = 'Ainda não aconteceu nenhum caso'
const quantity = (qtd) => qtd > 1 ? 'são' : 'há somente';
const confirmed = (qtd) => qtd > 1 ? 'casos confirmados' : 'caso confirmado';
const suspected = (qtd) => qtd > 1 ? 'casos suspeitos' : 'caso suspeito';
const deaths = (qtd) => qtd > 1 ? 'mortes' : 'morte';
const ssName = 'secretarias de saúde'
const msName = 'ministério da saúde'

module.exports = {
  casesByRegion(id, name) {
    response = repository.casesByRegion(id)

    if (response === [] || (response.ms === 0 && response.ss === 0)) {
      return `${withoutCasesMsg} ${name}`
    } else {
      const ss = response.ss
      const ms = response.ms
      let message = ''
      if (ss === ms) {
        message = `${name}, segundo as ${ssName} e o ${msName} ${quantity(ss)} ${ss} ${confirmed(ss)}`
      } else {
        if (ss > 0) {
          message = `${name}, segundo as ${message} ${ssName} ${quantity(ss)} ${ss} ${confirmed(ss)}`
        }

        if (ms > 0) {
          message = `${message === '' ? `${name}, segundo o` : `${message}. Pelo o`} ${msName} ${quantity(ms)} ${ms} ${confirmed(ms)}`
        }

        if (response.suspected > 0 || response.deaths > 0) {
          message = `${message}. Há também`

          if (response.suspected > 0) {
            message = `${message} ${response.suspected} ${suspected(response.suspected)}`
          }

          if (response.deaths > 0) {
            message = `${message} ${response.suspected > 0 ? 'e' : ''} ${response.deaths} ${deaths(response.deaths)}`
          }
        }
      }

      console.log(message)
      return message
    }
  }
};