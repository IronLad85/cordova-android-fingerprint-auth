/*global cordova */
var exec = require('cordova/exec');

var Fingerprint = {
  show : function(params, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "Fingerprint", "authenticate", [params])
  },
  isAvailable: function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "Fingerprint", "isAvailable", [{}])
  }
}

module.exports = Fingerprint;
