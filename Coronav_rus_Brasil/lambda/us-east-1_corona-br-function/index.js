const Alexa = require('ask-sdk-core');
const handlers = require('./handlers');
const interceptors = require('./interceptors');

exports.handler = Alexa.SkillBuilders
  .custom()
  .addRequestHandlers(...handlers.request)
  .addRequestInterceptors(...interceptors)
  .addErrorHandlers(handlers.error)
  .withCustomUserAgent('sample/basic-fact/v2')
  .lambda();


