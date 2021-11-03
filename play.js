const net = require("net");
const {connect} = require('./client');
// establishes a connection with the game server
console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function (key) {
    if(key === '\u0003') {
      process.exit();
    }
  }
  stdin.on("data", handleUserInput);
  return stdin;
};

setupInput();
