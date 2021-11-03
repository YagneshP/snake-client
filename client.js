const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  //Message and Initials
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: Yag');
  });
  //Moves
  conn.on('connect', () => {
    // conn.write('Move: up');
    // setTimeout(() => {
    //   conn.write('Move: right');
    // },500);
    // setInterval(()=>{
    //   conn.write('Move: right');
    // },50);
    // conn.write('Move: down');
    // conn.write('Move: right');
    // conn.write('Move: left');
  });
  conn.on('data', (message) => {
    console.log(message);
  })

  return conn;
};

module.exports = {connect};