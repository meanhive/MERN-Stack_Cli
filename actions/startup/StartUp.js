var TextCommand = require('./../commands/TextCommand.js');
var PrintDocCommand = require('./../commands/PrintDocCommand.js');
var CreateCommand = require('./../commands/CreateCommand.js');
var PageCommand = require('./../commands/CreatePage.js');
var ComponentCommand = require('./../commands/CreateComponent.js');
var SecretCommand = require('./../commands/CreateSecret');

var StartUp = function(commandPattern, args, flags) {
  var commanderInCharge = function(mod) {
    var commander = new mod(...args);
    commander.handle(flags);
  };

  var execute = function() {
    switch (commandPattern) {
      case 'runs':
        commanderInCharge(TextCommand);
        break;
      case 'create':
        commanderInCharge(CreateCommand);
        break;
      case 'make':
        commanderInCharge(ComponentCommand);
        break;      
      case 'page':
        commanderInCharge(PageCommand);
        break;      
      case 'secret':
        commanderInCharge(SecretCommand);
        break;
      default:
        commanderInCharge(PrintDocCommand);
    }
  };

  return {
    execute: execute
  }

};

module.exports = StartUp;
