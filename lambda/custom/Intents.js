//MARK: Below are all Custom Intents
/**
 * Custom intent. Called when the user wants to add a Chore
 */
const ADD_CHORE_INTENT = 'AddChoreIntent';

/**
 * Custom intent. Called when the user wants to list all of their Chores
 */
const LIST_CHORES_INTENT = 'ListChoresIntent';

/**
 * Custom intent. Called when the user wants to remove a chore
 */
const REMOVE_CHORE_INTENT = 'RemoveChoreIntent';

//MARK: Below are all default AMAZON.<any> Intents
/**
 * AMAZON Intent. Lets the user cancel a task or completely exit the skill
 */
const AMAZON_CANCEL_INTENT = 'AMAZON.CancelIntent';

/**
 * AMAZON Intent. Called when the user asks for help about the skill
 */
const AMAZON_HELP_INTENT = 'AMAZON.HelpIntent';

/**
 * AMAZON Intent. Lets the user stop an action or completely exit the skill
 */
const AMAZON_STOP_INTENT = 'AMAZON.StopIntent';

/**
 * AMAZON Intent. Provides a fallback for user utterances taht do not match any of our skill's intents
 */
const AMAZON_FALLBACK_INTENT = 'AMAZON.FallbackIntent';

module.exports = {
  ADD_CHORE_INTENT,
  LIST_CHORES_INTENT,
  REMOVE_CHORE_INTENT,
  AMAZON_CANCEL_INTENT,
  AMAZON_FALLBACK_INTENT,
  AMAZON_HELP_INTENT,
  AMAZON_STOP_INTENT
};
