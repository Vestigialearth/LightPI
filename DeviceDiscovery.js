"use strict";

var requestUrl = require("requestUrl")
           , promise   = require("promise")
           , search    = require("./search")
           , http      = require("./httpPromise")
           , utils     = require("./utils")
           , discovery = require("./commands/discovery")
           ;
           


@param timeout
@return

var BulbDevice,
	timeout = 2000; 

module.exports.networkSearch = function (timeout)
{
  return search.locateBulbDevice(timeout).then(identifyBulbDevice);
};

var displayBulbDevice = function(BulbDevice) {
	console.log("Lights Found: " + JSON.stringify(BulbDevice));
};

BulbDevice.upnpSearch(timeout).then(displayBulbDevice).done();
