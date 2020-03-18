const skillNameSpeakable = 'Corona vírus Brasil'
const options = 'Você pode perguntar a quantidade de casos que aconteceram no o Brasil ou em um estado'
const fallback = `Hmmm, não sei nada sobre isso, ${options}`

module.exports = {
  'pt-BR': {
    translation: {
      WELCOME_MESSAGE: `Bem vindo`, // ao ${skillNameSpeakable}, aqui ${options}`,
      WELCOME_REPROMPT_MESSAGE: options,
      HELP_MESSAGE: options,
      FALLBACK_MESSAGE: fallback,
      STOP_MESSAGE: 'Até mais'
    }
  }
};