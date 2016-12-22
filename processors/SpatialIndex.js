// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../core/declare","dojo/Deferred","dojo/_base/lang","./Processor","../workers/WorkerClient","../layers/FeatureLayer"],function(e,t,r,s,i,n){var o=e([s],{declaredClass:"esri.processors.SpatialIndex",index:null,indexType:"rtree",autostart:!1,constructor:function(e){e=e||{};var t=e.autostart!==!1;if(r.mixin(this,e),this.workerCallback=["./scripts/helpers","./scripts/indexInterface","./indexWorker"],!this.fetchWithWorker){var s=this;this.workerClient=new i("./mutableWorker",function(e){this.workerClient=e,this.workerCallback.push("./libs/"+this.indexType),this.workerClient.importScripts(this.workerCallback).then(function(){s._attachedSystem=!0,t&&s.start()})}.bind(this))}this._featCache={}},destroy:function(){this.workerClient&&this.workerClient.terminate()},addLayer:function(e,t){if(e.graphics&&e.graphics.length||t||e.isInstanceOf(n)){var r=this.workerClient;if(!this._attachedSystem&&r.worker){var s=this;this.inherited(arguments,[e,!0]),r.importScripts("./libs/"+this.indexType).then(function(){s.runProcess(e.graphics,e.id),s._attachedSystem=!0})}else this.inherited(arguments,[e])}},unsetMap:function(){this.stop(),this.workerClient.terminate(),this.fetchWithWorker||(this.workerClient=new i(this.workerCallback,function(){})),this.inherited(arguments),this.start()},removeLayer:function(e){this.inherited(arguments)},runProcess:function(e,t){if(e&&e.length){var r=this,s=this.workerClient,i=e[0]._graphicsLayer;t||0===t||(t=i?i.id:"rawFeatures_"+Object.keys(this._featCache).length),this._featCache[t]||(this._featCache[t]={});for(var n,o,a=[],h=e.length,c=i&&i.objectIdField;h--;)o=e[h],n=o.attributes&&c?o.attributes[c]:o.id,null!=n&&this._featCache[t][n]||(this._featCache[t][n]=1,o.declaredClass?a.push({id:n,geometry:o.geometry.toJSON(!0),attributes:o.attributes}):a.push(o));s.postMessage({insert:a,system:this.indexType,options:this.indexOptions,idField:i&&i.objectIdField,layerId:t}).then(function(e){i&&i.emit("process-end",{processor:r,results:{insert:e.insert}})}),i&&i.emit("process-start",{processor:this})}},_sendFeaturesFromLayer:function(e,t){var r=t.graphic,s=this.workerClient,i=this,n=r.attributes[e.objectIdField];this._featCache[e.id]||(this._featCache[e.id]={}),this._featCache[e.id][n]||(this._featCache[e.id][n]=1,s.postMessage({insert:[{attributes:r.attributes,geometry:r.geometry.toJSON(!0)}],system:this.indexType,options:this.indexOptions,idField:e.objectIdField,layerId:e.id}).then(function(t){e.emit("process-end",{processor:i,results:{insert:t.insert}})}),e.emit("process-start",{processor:i}))},_notifyProcessStart:function(e,t){},_sendFeaturesFromTask:function(e,t){var r,s,i=t.featureSet.features,n=[],o=this.workerClient,a=this,h=i.length;for(this._featCache[e.id]||(this._featCache[e.id]={});h--;)s=i[h],r=s.attributes[e.objectIdField],this._featCache[e.id][r]||(this._featCache[e.id][r]=1,n.push(s));o.postMessage({insert:n,system:this.indexType,options:this.indexOptions,idField:e.objectIdField,layerId:e.id}).then(function(t){e.emit("process-end",{processor:a,results:{insert:t.insert}})}),e.emit("process-start",{processor:a})},get:function(){},intersects:function(e,r,s,i){var n;if("rtree"!=this.indexType){var o="Index.intersects only works with rtree indexes";return console.error(o),n=new t,n.reject({message:o}),n.promise}return this.workerClient.postMessage({search:e,layerId:r,returnNode:s,onlyIds:i})},within:function(e,r,s){var i;if("rtree"!=this.indexType){var n="Index.within only works with rtree indexes";return console.error(n),i=new t,i.reject({message:n}),i.promise}},nearest:function(e){var r;if("kdtree"!=this.indexType){var s="Index.nearest only works with kdtree indexes";return console.error(s),r=new t,r.reject({message:s}),r.promise}return this.workerClient.postMessage({search:e})}});return o});