
# Cordova Plugin Fingerprint
## **Android**

https://github.com/Siddharth-Stark/cordova-android-fingerprint-auth.git

**This plugin provides a single and simple event for listenting to fingerprint authentication event.**

## Features

* Check if fingerprint scanner is available
* Fingerprint authentication
* Listens for fingerprints on Background. i.e. no native UI popup!


### Platforms
* Android

## How to use

### Install

Install from NPM

```
cordova plugin add https://github.com/Siddharth-Stark/cordova-android-fingerprint-auth.git
```

### Check if fingerprint authentication is available
```javascript
Fingerprint.isAvailable(isAvailableSuccess, isAvailableError);

    function isAvailableSuccess(result) {
      // returns 'AVAILABLE' or 'NOT_AVAILABLE' value
      alert("Fingerprint ", result); //outputs 'Fingerprint Available'
    }

    function isAvailableError(message) {
      alert(message);
    }
```

### Listen for authentication event
```javascript
Fingerprint.listenForAuthentication({
      clientId: "Fingerprint",
      clientSecret: "password"
    }, successCallback, errorCallback);

    function successCallback(res){
      // returns object having code and message
      // success - {code: "SUCCESSFUL", message: "Fingerprint successfully verified"}
      // failure - {code: "NOT_RECOGNIZED", message: "Fingerprint not recognized! Try again"}
      alert("Authentication successfull");
    }

    function errorCallback(err){
      alert("Authentication invalid " + err);
    }
```
## Thanks to the authors of the original fingerprint plugins

Some code is refactored from their projects and I learned how to make Cordova plugins from their great plugins:

@EddyVerbruggen and @mjwheatley
[Android](https://github.com/mjwheatley/cordova-plugin-android-fingerprint-auth)

## License
* Android source -> MIT and Apache 2.0
