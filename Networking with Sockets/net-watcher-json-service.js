'use strict';
const
  fs = require('fs'),
  net = require('net'),

  filename = process.argv[2],

  server = net.createServer(function(connection) {

    //reporting
    console.log('Subscriber connected.'),
    // connection.write("Now watching '" + filename + "' for changes... /n");
    connection.write(JSON.stringify({
      type: 'watching',
      file: filename
    }) + '\n');

    //writer setup
    let watcher = fs.watch(filename, function(){
      // connection.write("File '" + filename + "' changed: " + Date.now() + "/n");
      connection.write(JSON.stringify({
        type: 'changed',
        file: filename,
        timestamp: Date.now()
      }) + '\n');
    });

    //cleanup
    connection.on('close', function() {
      console.log('Subscriber disconnected.');
      watcher.close();
    });
});

if (!filename) {
  throw new Error('No target filename was specified.');
}

server.listen(5150, function(){
  console.log('Listening for subscribers...');
});
