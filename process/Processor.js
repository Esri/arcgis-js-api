// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["../sniff","../kernel","dojo/_base/declare","dojo/Deferred","dojo/_base/lang","dojo/_base/array","dojo/Evented","../workers/RequestClient","../layers/GraphicsLayer"],(function(s,r,e,t,a,i,o,n,h){var d=e([o],{declaredClass:"esri.process.Processor",layers:null,results:null,passFeatures:!0,drawFeatures:!0,requireWorkerSupport:!0,fetchWithWorker:!1,workerCallback:null,workerClient:null,_started:null,_handlers:null,constructor:function(r){if(r=r||{},a.mixin(this,r),!s("esri-workers")&&(!1!==this.requireWorkerSupport||!1!==r.requireWorkerSupport))return console.log("Browser doesn't support workers & worker support is required for this processor"),this.addLayer=this.setMap=this.start=this.runProcess=function(){},void(this._disabled=!0);this._handlers={},this._notifyProcessStart=a.hitch(this,this._notifyProcessStart),this._sendFeaturesFromTask=a.hitch(this,this._sendFeaturesFromTask),this._sendFeaturesFromLayer=a.hitch(this,this._sendFeaturesFromLayer),!1!==r.autostart&&this.start()},addLayer:function(s,r){var e=s._task,t=this._handlers[s.id]=[],i="complete";!1===this.drawFeatures&&(s.suspendGraphics(!0),s.clearNodes()),this.fetchWithWorker?(this.workerClient||(this.workerClient=n.getClient(this.workerCallback)),e.requestOptions={workerOptions:{worker:this.workerClient}},this.passFeatures&&t.push(e.on(i,a.partial(this._notifyProcessStart,s)))):this.passFeatures?(i=this.drawFeatures?"graphic-draw":"graphic-add",t.push(s.on(i,a.partial(this._sendFeaturesFromLayer,s)))):t.push(e.on(i,a.partial(this._sendFeaturesFromTask,s))),!0!==r&&s.graphics&&this.runProcess(s.graphics,s.id)},removeLayer:function(s){var r=this._handlers[s.id];i.forEach(r,(function(s){s.remove()})),delete this._handlers[s.id]},setMap:function(s){if(this.map){if(s==this.map)return;this.unsetMap()}var r=this;i.forEach(this.layers,r.removeLayer),i.forEach(s.graphicsLayerIds,(function(e){r.addLayer(s.getLayer(e))})),this._handlers.map=[s.on("layer-add",(function(s){var e=s.layer;e.isInstanceOf(h)&&r.addLayer(e)})),s.on("layer-remove",(function(s){var e=s.layer;e.isInstanceOf(h)&&r.removeLayer(e)}))],this.map=s},unsetMap:function(){if(this.map){i.forEach(this._handlers.map,(function(s){s.remove()})),delete this._handlers.map,i.forEach(this.layers,this.removeLayer),this.map=null}},start:function(){this.map?this.setMap(this.map):this.layers&&(a.isArray(this.layers)||(this.layers=[this.layers]),i.forEach(this.layers,this.addLayer)),this._started=!0,this.emit("start",{processor:this}),console.log("processor started")},stop:function(){for(var s in this._started=!1,this._handlers)this._handlers.hasOwnProperty(s)&&(this._handlers[s].remove(),delete this._handlers[s]);this.emit("stop",{processor:this}),console.log("processor stopped")},runProcess:function(s,r){},_sendFeaturesFromTask:function(){},_sendFeaturesFromLayer:function(){},_notifyProcessStart:function(){}});return s("extend-esri")&&a.setObject("process.Processor",d,r),d}));