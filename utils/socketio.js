
module.exports = function(server) {
    var io = require('socket.io').listen(server);
    console.log(io.name);
};