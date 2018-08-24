/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

const API = require('./api');
const Requests = require('./Requests');
const Messages = require('./Messages');
const Intents = require('./Intents');

//MARK: Handlers for Requests
/**
 * Handler for a Launch Request
 */
const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === Requests.LAUNCH_REQUEST
    );
  },
  handle(handlerInput) {
    const speechText = Messages.WELCOME;

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  }
};

/**
 * Handler for a SessionEnded Request
 */
const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    const { request } = handlerInput.requestEnvelope;
    return request.type === Requests.SESSION_ENDED_REQUEST;
  },
  handle(handlerInput) {
    const { request } = handlerInput.requestEnvelope;
    console.log(`Session ended with reason: ${request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  }
};

//MARK: Handlers for Custom Intents
/**
 * Handler for the AddChoreIntent
 */
const AddChoreIntentHandler = {
  canHandle(handlerInput) {
    const { request } = handlerInput.requestEnvelope;
    return (
      request.type === Requests.INTENT_REQUEST &&
      request.intent.name === Intents.ADD_CHORE_INTENT
    );
  },
  async handle(handlerInput) {
    const { request } = handlerInput.requestEnvelope;
    const choreSlot = request.intent.slots.Chore;
    let choreName;
    if (choreSlot && choreSlot.value) {
      choreName = choreSlot.value.toLowerCase();
    }

    let speakOutput = Messages.ERROR_NO_CHORE_SLOT;
    if (choreName) {
      const success = await API.addChore(choreName);
      if (!success) {
        speakOutput = Messages.ERROR_ADDING_CHORE;
      }
      speakOutput = `Added ${choreName} to your chores list!`;
    }
    return handlerInput.responseBuilder.speak(speakOutput).getResponse();
  }
};

/**
 * Handler for the ListChoresIntent
 */
const ListChoresIntentHandler = {
  canHandle(handlerInput) {
    const { request } = handlerInput.requestEnvelope;
    return (
      request.type === Requests.INTENT_REQUEST &&
      request.intent.name === Intents.LIST_CHORES_INTENT
    );
  },
  async handle(handlerInput) {
    const chores = await API.getChores();
    const { request } = handlerInput.requestEnvelope;
    return handlerInput.responseBuilder
      .speak('Your chores are ' + chores.join(', '))
      .getResponse();
  }
};

//MARK: Handlers for AMAZON Default Intents
/**
 * Handler for the AMAZON.HelpIntent
 */
const HelpIntentHandler = {
  canHandle(handlerInput) {
    const { request } = handlerInput.requestEnvelope;
    return (
      request.type === Requests.INTENT_REQUEST &&
      request.intent.name === Intents.AMAZON_HELP_INTENT
    );
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(Messages.HELP)
      .reprompt(Messages.HELP)
      .getResponse();
  }
};

/**
 * Handler for the AMAZON.StopIntent and AMAZON.CancelIntent
 */
const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    const { request } = handlerInput.requestEnvelope;
    return (
      request.type === Requests.INTENT_REQUEST &&
      (request.intent.name === Intents.AMAZON_CANCEL_INTENT ||
        request.intent.name === Intents.AMAZON_STOP_INTENT)
    );
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder.speak(Messages.CANCEL).getResponse();
  }
};

/**
 * Handler for any unexpected errors
 */
const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak(Messages.ERROR)
      .reprompt(Messages.ERROR)
      .getResponse();
  }
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    SessionEndedRequestHandler,
    AddChoreIntentHandler,
    ListChoresIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
