let connection;

const setupInput = function (conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// setup interface to handle user input from stdin
const handleUserInput = function (key) {
  switch (key) {
    case '\u0057':
      connection.write('Move: up');
      break;
    case '\u0077':
      connection.write('Move: up');
      break;
    case '\u0041':
      connection.write('Move: left');
      break;
    case '\u0061':
      connection.write('Move: left');
      break;
    case '\u0053':
      connection.write('Move: down');
      break;
    case '\u0073':
      connection.write('Move: down');
      break;
    case '\u0044':
      connection.write('Move: right');
      break;
    case '\u0064':
      connection.write('Move: right');
      break;
    case '\u007A':
      connection.write('Say: not too fast..');
      break;
    case '\u0003':
      process.exit();
      break;
    default:
      break;
  }

};

module.exports = {
  setupInput
}