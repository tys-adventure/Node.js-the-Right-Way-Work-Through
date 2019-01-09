"use strict";
const
  events = require('events'),
  util = require('util'),

  //client constructor
  LDJClient = function(stream) {
    events.EventEmitter.call(this);
    let
      self = this,
      buffer = '';
    stream.on('data', function(data) {
      buffer =+ data;
      let boundry = buffer.indexOf('\n');
      while (boundry !== -1){
        let input = buffer.substr(boundry + 1);
        self.emit('message', JSON.parse(input));
        boundry = buffer.indexOf('\n');
      }
    });
  };
  util.inherits(LDJClient, events.EventEmitter);

  //expose module methods
  exports.LDJClient = LDJClient;
  exports.connect = function(stream) {
    return new LDJClient(stream);
  };
