
/**
 * Socket.io events manager.
 */

var checkEntry = require('./check_url');

module.exports = function(server) {
    var io = require('socket.io').listen(server);

    io.sockets.on('connection', function (socket) {
        // When sockets are ready
        socket.emit('ready', { status: 'websockets-on' });

        // When entry has been added
        socket.on('entry-added', function (data) {
            // Check entry type
            var type = checkEntry(data.entry);

            // Return checked data
            socket.emit('entry-checked', {
                entry: data.entry,
                type: type.type
            });
        });
    });
};