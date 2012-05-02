
//Get required modules
var Request = require('request');
var qs = require('querystring');
var xmlbuilder = require('xmlbuilder');

var Plivo = {};

Plivo.options = {};
Plivo.options.host = 'http://localhost';
Plivo.options.port = '8088';
Plivo.options.version = 'v1';
Plivo.options.accountSid = '';
Plivo.options.authToken = '';

//Define a new error object - A string is not an error, thanks Guillermo: 
//http://www.devthought.com/2011/12/22/a-string-is-not-an-error/
function PlivoError (msg) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.message = msg;
  this.name = 'PlivoError';
};

PlivoError.prototype.__proto__ = Error.prototype;


//Main request function
var request = function (action, vars, callback) {
  var err = null;
  var path = Plivo.options.host + ':' + Plivo.options.port + '/' + Plivo.options.version + '/' + action +'/';
  var method = 'POST';
  if(vars) {
    path += '?' + qs.stringify(vars);
  }
  Request({
    method: method,
    uri: path
  }, function(error, response, body) {
    if(response.statusCode != 200) {
      err = new PlivoError(error);
    }
    callback(err, body);
  });
};

Plivo.call = function (vars, callback) {
  var action = 'Call';
  request(action, vars, function(err, response) {
    callback(err, response);
  });
};

Plivo.bulkCall = function (vars, callback) {
  var action = 'BulkCall';
  request(action, vars, function(err, response) {
    callback(err, response);
  });
};

Plivo.groupCall = function (vars, callback) {
  var action = 'GroupCall';
  request(action, vars, function(err, response) {
    callback(err, response);
  });
};

Plivo.transferCall = function (vars, callback) {
  var action = 'TransferCall';
  request(action, vars, function(err, response) {
    callback(err, response);
  });
};

Plivo.hangupAllCalls = function (callback) {
  var action = 'HangupAllCall';
  request(action, vars, function(err, response) {
    callback(err, response);
  });
};

Plivo.hangupCall = function (vars, callback) {
  var action = 'HangupCall';
  request(action, vars, function(err, response) {
    callback(err, response);
  });
};

Plivo.scheduleHangup = function (vars, callback) {
  var action = 'ScheduleHangup';
  request(action, vars, function(err, response) {
    callback(err, response);
  });
};

Plivo.cancelScheduledHangup = function (vars, callback) {
  var action = 'CancelScheduledHangup';
  request(action, vars, function(err, response) {
    callback(err, response);
  }); 
};

Plivo.recordStart = function (vars, callback) {
  var action = 'RecordStart';
  request(action, vars, function(err, response) {
    callback(err, response);
  }); 
};

Plivo.recordStop = function (vars, callback) {
  var action = 'RecordStop';
  request(action, vars, function(err, response) {
    callback(err, response);
  });
};

Plivo.play = function (vars, callback) {
    
};

Plivo.playStop = function (vars, callback) {
    
};

Plivo.schedulePlay = function (vars, callback) {
    
};

Plivo.cancelScheduledPlay = function (vars, callback) {
    
};

Plivo.sendDigits = function (vars, callback) {
    
};

Plivo.conferenceMute = function (vars, callback) {
    
};

Plivo.conferenceUnmute = function (vars, callback) {
    
};

Plivo.conferenceKick = function (vars, callback) {
    
};

Plivo.conferenceHangup = function (vars, callback) {
    
};

Plivo.conferenceDeaf = function (vars, callback) {
    
};

Plivo.conferenceUndeaf = function (vars, callback) {
    
};

Plivo.conferenceRecordStart = function (vars, callback) {
    
};

Plivo.conferenceRecordStop = function (vars, callback) {
    
};

Plivo.conferencePlay = function (vars, callback) {
    
};

Plivo.conferenceSpeak = function (vars, callback) {
    
};

Plivo.conferenceList = function (vars, callback) {
    
};

Plivo.conferenceListMembers = function (vars, callback) {
    
};


Plivo.Response = function() {

  var object = this;
  var xml = xmlbuilder.create().begin('Response');

  //Plivo Response Elements
  this.speak = function(text, options) {
    xml = xml.ele('Speak');
    insertAttributes(options);
    xml.txt(text);
    return object;
  }

  this.dial = function(text, options) {

  }

  this.number = function(text) {

  }

  this.up = function() {
    xml.up();
    return object;
  }

  this.toString = function() {
    return xml.toString();
  }

  var insertAttributes = function(options, valid) {
    if('object' == typeof options) {
      for(var key in options) {
        if(valid && valid.indexOf(key) === -1) {
          throw new PlivoError('Trying to use an attribute "' + key + '" that is not allowed in this element');
        }
        xml.att(key, options[key]);
      }
    }
  }
};





