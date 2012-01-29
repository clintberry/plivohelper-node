
//Get required modules
var Request = require('request');
var qs = require('querystring');


var Plivo = {};

Plivo.options = {};
Plivo.options.host = 'http://localhost';
Plivo.options.port = '8080';
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
var request = function (action, method, vars, callback) {
  var err = null;
  var path = Plivo.options.host + ':' + Plivo.options.port + '/' + action +'/';
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
    var method = 'POST';
    
    request(action, method, vars, function(err, response) {
      callback(err, response);
    });
};

Plivo.bulkCall = function (vars, callback) {
    
};

Plivo.groupCall = function (vars, callback) {
    
};

Plivo.transferCall = function (vars, callback) {
    
};

Plivo.hangupAllCalls = function (callback) {
    
};

Plivo.hangupCall = function (vars, callback) {
    
};

Plivo.scheduleHangup = function (vars, callback) {
    
};

Plivo.cancelScheduledHangup = function (vars, callback) {
    
};

Plivo.recordStart = function (vars, callback) {
    
};

Plivo.recordStop = function (vars, callback) {
    
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




//TODO: Program XML response functions so that they can be chained
Plivo.response = {};





