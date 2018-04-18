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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["../core/declare","dojo/Deferred","dojo/_base/lang","./Processor","../workers/WorkerClient"],function(e,t,r,i,s){return e([i],{declaredClass:"esri.processors.SpatialIndex",index:null,indexType:"rtree",autostart:!1,constructor:function(e){e=e||{};var t=!1!==e.autostart;if(r.mixin(this,e),this.workerCallback=["./scripts/helpers","./scripts/indexInterface","./indexWorker"],!this.fetchWithWorker){var i=this;this.workerClient=new s("./mutableWorker",function(e){this.workerClient=e,this.workerCallback.push("./libs/"+this.indexType),this.workerClient.importScripts(this.workerCallback).then(function(){i._attachedSystem=!0,t&&i.start()})}.bind(this))}this._featCache={}},destroy:function(){this.workerClient&&this.workerClient.terminate()},addLayer:function(e,t){if(e.graphics&&e.graphics.length||t||"feature"===e.type){var r=this.workerClient;if(!this._attachedSystem&&r.worker){var i=this;this.inherited(arguments,[e,!0]),r.importScripts("./libs/"+this.indexType).then(function(){i.runProcess(e.graphics,e.id),i._attachedSystem=!0})}else this.inherited(arguments,[e])}},unsetMap:function(){this.stop(),this.workerClient.terminate(),this.fetchWithWorker||(this.workerClient=new s(this.workerCallback,function(){})),this.inherited(arguments),this.start()},removeLayer:function(e){this.inherited(arguments)},runProcess:function(e,t){if(e&&e.length){var r=this,i=this.workerClient,s=e[0]._graphicsLayer;t||0===t||(t=s?s.id:"rawFeatures_"+Object.keys(this._featCache).length),this._featCache[t]||(this._featCache[t]={});for(var n,o,a=[],h=e.length,c=s&&s.objectIdField;h--;)o=e[h],null!=(n=o.attributes&&c?o.attributes[c]:o.id)&&this._featCache[t][n]||(this._featCache[t][n]=1,o.declaredClass?a.push({id:n,geometry:o.geometry.toJSON(!0),attributes:o.attributes}):a.push(o));0!==a.length&&(i.postMessage({insert:a,system:this.indexType,options:this.indexOptions,idField:s&&s.objectIdField,layerId:t}).then(function(e){s&&s.emit("process-end",{processor:r,results:{insert:e.insert}})}),s&&s.emit("process-start",{processor:this}))}},_sendFeaturesFromLayer:function(e,t){var r=t.graphic,i=this.workerClient,s=this,n=r.attributes[e.objectIdField];this._featCache[e.id]||(this._featCache[e.id]={}),this._featCache[e.id][n]||(this._featCache[e.id][n]=1,i.postMessage({insert:[{attributes:r.attributes,geometry:r.geometry.toJSON(!0)}],system:this.indexType,options:this.indexOptions,idField:e.objectIdField,layerId:e.id}).then(function(t){e.emit("process-end",{processor:s,results:{insert:t.insert}})}),e.emit("process-start",{processor:s}))},_notifyProcessStart:function(e,t){},_sendFeaturesFromTask:function(e,t){var r,i,s=t.featureSet.features,n=[],o=this.workerClient,a=this,h=s.length;for(this._featCache[e.id]||(this._featCache[e.id]={});h--;)i=s[h],r=i.attributes[e.objectIdField],this._featCache[e.id][r]||(this._featCache[e.id][r]=1,n.push(i));o.postMessage({insert:n,system:this.indexType,options:this.indexOptions,idField:e.objectIdField,layerId:e.id}).then(function(t){e.emit("process-end",{processor:a,results:{insert:t.insert}})}),e.emit("process-start",{processor:a})},get:function(){},intersects:function(e,r,i,s){var n;if("rtree"!=this.indexType){var o="Index.intersects only works with rtree indexes";return console.error(o),n=new t,n.reject({message:o}),n.promise}return this.workerClient.postMessage({search:e,layerId:r,returnNode:i,onlyIds:s})},within:function(e,r,i){var s;if("rtree"!=this.indexType){var n="Index.within only works with rtree indexes";return console.error(n),s=new t,s.reject({message:n}),s.promise}},nearest:function(e){var r;if("kdtree"!=this.indexType){var i="Index.nearest only works with kdtree indexes";return console.error(i),r=new t,r.reject({message:i}),r.promise}return this.workerClient.postMessage({search:e})}})});