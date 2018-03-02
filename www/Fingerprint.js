/*global cordova */
var exec = require('cordova/exec');

var Fingerprint = {
  listenForAuthentication : function(params, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "Fingerprint", "listenForAuthentication", [params])
  },
  isAvailable: function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "Fingerprint", "isAvailable", [{}])
  }
}

module.exports = Fingerprint;
