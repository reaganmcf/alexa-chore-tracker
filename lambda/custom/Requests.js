/**
 * LaunchRequest
 *
 * Sent when the user invokes the skill without providing a specific intent.
 */
const LAUNCH_REQUEST = 'LaunchRequest';

/**
 * IntentRequest
 *
 * Sent when the user makes a request that corresponds to one of our intents
 */
const INTENT_REQUEST = 'IntentRequest';

/**
 * SessionEndedRequest
 *
 * Sent when the current skill session ends for any other reason other than our code closing the session
 */
const SESSION_ENDED_REQUESt = 'SessionEndedRequest';

module.exports = {
  LAUNCH_REQUEST,
  INTENT_REQUEST,
  SESSION_ENDED_REQUESt
};
