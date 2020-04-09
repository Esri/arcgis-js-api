// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["../sniff","../kernel","dojo/_base/declare","dojo/Deferred","dojo/_base/lang","./Processor","../workers/WorkerClient","../layers/FeatureLayer"],(function(e,t,r,s,i,n,o,a){var h=r([n],{declaredClass:"esri.process.SpatialIndex",index:null,indexType:"rtree",workerCallback:["./scripts/helpers","./scripts/indexInterface","./indexWorker"],autostart:!1,constructor:function(e){if(e=e||{},i.mixin(this,e),!this.fetchWithWorker){var t=this;this.workerClient=new o("./mutableWorker",(function(){t.workerCallback.push("./libs/"+t.indexType),t.workerClient.importScripts(t.workerCallback).then((function(){t._attachedSystem=!0,t.autostart&&t.start()}))}),!0)}this._featCache={}},addLayer:function(e,t){if(e.graphics&&e.graphics.length||t||e.isInstanceOf(a)){var r=this.workerClient;if(!this._attachedSystem&&r.worker){var s=this;this.inherited(arguments,[e,!0]),r.importScripts("./libs/"+this.indexType).then((function(){s.runProcess(e.graphics,e.id),s._attachedSystem=!0}))}else this.inherited(arguments,[e])}},unsetMap:function(){this.stop(),this.workerClient.terminate(),this.fetchWithWorker||(this.workerClient=new o(this.workerCallback,(function(){}),!0)),this.inherited(arguments),this.start()},removeLayer:function(e){this.inherited(arguments)},runProcess:function(e,t){if(e&&e.length){var r=this,s=this.workerClient,i=e[0]._graphicsLayer;t||0===t||(t=i?i.id:"rawFeatures_"+Object.keys(this._featCache).length),this._featCache[t]||(this._featCache[t]={});for(var n,o,a=[],h=e.length,c=i&&i.objectIdField;h--;)null!=(n=(o=e[h]).attributes&&c?o.attributes[c]:o.id)&&this._featCache[t][n]||(this._featCache[t][n]=1,o.declaredClass?a.push({id:n,geometry:o.geometry,attributes:o.attributes}):a.push(o));s.postMessage({insert:a,system:this.indexType,options:this.indexOptions,idField:i&&i.objectIdField,layerId:t}).then((function(e){i&&i.emit("process-end",{processor:r,results:{insert:e.insert}})})),i&&i.emit("process-start",{processor:this})}},_sendFeaturesFromLayer:function(e,t){var r=t.graphic,s=this.workerClient,i=this,n=r.attributes[e.objectIdField];this._featCache[e.id]||(this._featCache[e.id]={}),this._featCache[e.id][n]||(this._featCache[e.id][n]=1,s.postMessage({insert:[{attributes:r.attributes,geometry:r.geometry}],system:this.indexType,options:this.indexOptions,idField:e.objectIdField,layerId:e.id}).then((function(t){e.emit("process-end",{processor:i,results:{insert:t.insert}})})),e.emit("process-start",{processor:i}))},_notifyProcessStart:function(e,t){},_sendFeaturesFromTask:function(e,t){var r,s,i=t.featureSet.features,n=[],o=this.workerClient,a=this,h=i.length;for(this._featCache[e.id]||(this._featCache[e.id]={});h--;)r=(s=i[h]).attributes[e.objectIdField],this._featCache[e.id][r]||(this._featCache[e.id][r]=1,n.push(s));o.postMessage({insert:n,system:this.indexType,options:this.indexOptions,idField:e.objectIdField,layerId:e.id}).then((function(t){e.emit("process-end",{processor:a,results:{insert:t.insert}})})),e.emit("process-start",{processor:a})},get:function(){},intersects:function(e,t,r){var i;if("rtree"!=this.indexType){var n="Index.intersects only works with rtree indexes";return console.error(n),(i=new s).reject({message:n}),i.promise}return i=this.workerClient.postMessage({search:e,layerId:t,returnNode:r})},within:function(e,t,r){var i;if("rtree"!=this.indexType){var n="Index.within only works with rtree indexes";return console.error(n),(i=new s).reject({message:n}),i.promise}},nearest:function(e){var t;if("kdtree"!=this.indexType){var r="Index.nearest only works with kdtree indexes";return console.error(r),(t=new s).reject({message:r}),t.promise}return t=this.workerClient.postMessage({search:e})}});return e("extend-esri")&&i.setObject("process.SpatialIndex",h,t),h}));