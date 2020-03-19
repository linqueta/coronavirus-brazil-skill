const skillNameSpeakable = 'Corona vírus Brasil'
const options = 'Você pode perguntar a quantidade de casos que aconteceram no o Brasil ou em um estado'

module.exports = {
  'pt-BR': {
    translation: {
      WELCOME_MESSAGE: `Bem vindo`, // ao ${skillNameSpeakable}, aqui ${options}`,
      WELCOME_REPROMPT_MESSAGE: options,
      HELP_MESSAGE: options,
      FALLBACK_MESSAGE: options,
      STOP_MESSAGE: 'Até mais',
      CASES_REPROMPT_MESSAGE: `Gostaria de saber sobre mais alguma região do Brasil?`
    }
  }
};