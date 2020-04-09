// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

/* eslint-env worker */

// Use `npm run minify:worker` to created worker.min.js and then copy content to workerFactory.ts

var globalId = 0;
var outgoing = new Map();
var configured = false;

//
// /!\ The values for each constant match the ones declared in utils.ts
//
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
var ABORT = 7;

function createAbortError() {
  var error = new Error("AbortError");
  error.dojoType = "cancel";
  return error;
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

  var abort = function() {
    var outJob = outgoing.get(jobId);

    if (!outJob) {
      return;
    }

    outgoing.delete(jobId);

    // post a cancel message in order to cancel on the main thread
    self.postMessage({
      type: ABORT,
      jobId: jobId
    });

    outJob.reject(createAbortError());
  };

  // TODO promise-migration: just use Promise and rely on signal
  var deferred = new Deferred(abort);

  if (signal) {
    if (signal.aborted) {
      return deferred.reject(createAbortError());
    }

    signal.addEventListener("abort", function() {
      abort();
      deferred.reject(createAbortError());
    });
  }

  outgoing.set(jobId, deferred);

  // post to main thread
  self.postMessage({
    type: INVOKE,
    jobId: jobId,
    methodName: methodName,
    // TODO promise migration: change to abortable: signal != null
    abortable: true,
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

      require(["esri/config"], function(esriConfig) {
        for (var name in configuration.esriConfig) {
          if (Object.prototype.hasOwnProperty.call(configuration.esriConfig, name)) {
            esriConfig[name] = configuration.esriConfig[name];
          }
        }
        self.postMessage({
          type: CONFIGURED
        });
      });

      configured = true;
      break;

    // Loads a module
    case OPEN:
      var modulePath = message.modulePath;

      require(["esri/core/workers/RemoteClient"], function(RemoteClient) {
        RemoteClient.loadWorker(modulePath)
          .then(function(Module) {
            return (
              Module ||
              new Promise(function(resolve) {
                require([modulePath], resolve);
              })
            );
          })
          .then(function(Module) {
            var port = RemoteClient.connect(Module);

            self.postMessage(
              {
                type: OPENED,
                jobId: jobId,
                data: port
              },
              [port]
            );
          });
      });
      break;

    // response to a static message
    case RESPONSE:
      if (outgoing.has(jobId)) {
        var deferred = outgoing.get(jobId);

        outgoing.delete(jobId);

        if (message.error) {
          deferred.reject(JSON.parse(message.error));
        } else {
          deferred.resolve(message.data);
        }
      }
      break;
  }
}

self.addEventListener("message", messageHandler);

// Handshake with the main thread
self.postMessage({ type: HANDSHAKE });
