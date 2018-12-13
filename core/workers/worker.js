// COPYRIGHT © 2018 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

/* eslint-env worker */

var globalId = 0;
var outgoing = new Map();
var configured = false;

// to handshake with worker the main thread
var HANDSHAKE = 0;
// to configure the worker
var CONFIGURE = 1;
// for worker to indicated it's configured
var CONFIGURED = 2;
// to open a connection
var OPEN = 3;
// response a connection
var OPENED = 4;
// to send a response to a call
var RESPONSE = 5;
// to invoke a method on the other side
var INVOKE = 6;
// to cancel a call
var CANCEL = 7;

function mapDelete(map, key) {
  map["delete"](key); // eslint-disable-line
}

function receiveMessage(event) {
  if (!event || !event.data) {
    return null;
  }
  if (typeof event.data === "string") {
    return JSON.parse(event.data);
  }
  return event.data;
}

// eslint-disable-next-line no-unused-vars
function invokeStaticMessage(methodName, data, options) {
  // Deferred has already been loaded at this point
  var signal = options && options.signal;
  var Deferred = require("dojo/Deferred");
  var jobId = globalId++;

  var abortHandler = function() {
    if (!outgoing.has(jobId)) {
      return;
    }

    // post a cancel message in order to cancel on the main thread
    self.postMessage({
      type: CANCEL,
      methodName: methodName,
      jobId: jobId
    });

    mapDelete(outgoing, jobId);

    if (!deferred.isCanceled()) {
      deferred.cancel();
    }

    if (signal) {
      signal.removeEventListener("abort", abortHandler);
    }
  };

  if (signal) {
    signal.addEventListener("abort", abortHandler);
  }

  // TODO promise-migration: just use Promise and rely on signal
  var deferred = new Deferred(abortHandler);

  outgoing.set(jobId, deferred);

  // post to main thread
  self.postMessage({
    type: INVOKE,
    methodName: methodName,
    jobId: jobId,
    data: data
  });

  return deferred.promise;
}

function messageHandler(event /* FmkMessageEvent */) {
  var message = receiveMessage(event);

  if (!message) {
    return;
  }

  var jobId = message.jobId;

  switch (message.type) {

    // Configure the AMD loader
    case CONFIGURE:
      var configuration = message.configure;

      if (configured) {
        return;
      }

      self.dojoConfig = configuration.loaderConfig;
      self.importScripts(configuration.loaderUrl);

      if (typeof require.config === "function") {
        require.config(configuration.loaderConfig);
      }

      require([
        "esri/config"
      ], function(esriConfig) {
        for (var name in configuration.esriConfig) {
          if (Object.prototype.hasOwnProperty.call(configuration.esriConfig, name)) {
            esriConfig[name] = configuration.esriConfig[name];
          }
        }
        self.postMessage({
          type: CONFIGURED
        });
      });
      break;

  // Loads a module
  case OPEN:
    var modulePath = message.modulePath;

    require([
      "esri/core/workers/RemoteClient",
      modulePath
    ],
    function(RemoteClient, Module) {
      var port = RemoteClient.connect(Module);

      self.postMessage({
        type: OPENED,
        jobId: jobId,
        data: port
      }, [port]);
    });
    break;

  // response to a static message
  case RESPONSE:
    if (outgoing.has(jobId)) {
      var deferred = outgoing.get(jobId);

      mapDelete(outgoing, jobId);

      if (message.error) {
        deferred.reject(JSON.parse(message.error));
      }
      else {
        deferred.resolve(message.data);
      }
    }

    break;
  }
}

self.addEventListener("message", messageHandler);

// Handshake with the main thread
self.postMessage({ type: HANDSHAKE });
