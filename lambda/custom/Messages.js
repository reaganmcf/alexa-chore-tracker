const HELP =
  "You can say what chores you want to add to your list. For example, <break time='75ms' /> Add mowing the lawn. <break time='50ms'/> You can have me list all chores on your list by asking <break time='75ms' /> What are my chores?";

const WELCOME = "Welcome to Chore Tracker! <break time='75ms' />" + HELP;

const CANCEL = 'Goodbye!';

const ERROR = "Sorry, I can't understand the command. Please say that again.";

const ERROR_ADDING_CHORE = 'There was an error adding the chore.';

const ERROR_NO_CHORE_SLOT = 'Sorry, I could not identify that chore.';

const ERROR_REMOVING_CHORE = 'Sorry, there was an error removing your chore.';

module.exports = {
  HELP,
  WELCOME,
  CANCEL,
  ERROR,
  ERROR_ADDING_CHORE,
  ERROR_NO_CHORE_SLOT,
  ERROR_REMOVING_CHORE
};
