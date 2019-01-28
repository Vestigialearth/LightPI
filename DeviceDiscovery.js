"use strict";

var requestUrl = require("requestUrl")
           , storage   = require("storage")
           , search    = require("./search")
           , http      = require("./httpPromise")
           , utils     = require("./utils")
           , discovery = require("./commands/discovery")
           ;
           
@param timeout
@return

module.exports.networkSearch = function (timeout)
{
  return search.locateBulbDevice(timeout).then(identifyBulbDevice);
};
