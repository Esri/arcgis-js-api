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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["../sniff","../kernel","dojo/_base/declare","dojo/Deferred","dojo/_base/lang","dojo/_base/array","dojo/Evented","../workers/RequestClient","../layers/GraphicsLayer"],function(r,s,e,t,a,i,o,n,h){var d=e([o],{declaredClass:"esri.process.Processor",layers:null,results:null,passFeatures:!0,drawFeatures:!0,requireWorkerSupport:!0,fetchWithWorker:!1,workerCallback:null,workerClient:null,_started:null,_handlers:null,constructor:function(s){return s=s||{},a.mixin(this,s),r("esri-workers")||this.requireWorkerSupport===!1&&s.requireWorkerSupport===!1?(this._handlers={},this._notifyProcessStart=a.hitch(this,this._notifyProcessStart),this._sendFeaturesFromTask=a.hitch(this,this._sendFeaturesFromTask),this._sendFeaturesFromLayer=a.hitch(this,this._sendFeaturesFromLayer),void(s.autostart!==!1&&this.start())):(console.log("Browser doesn't support workers & worker support is required for this processor"),this.addLayer=this.setMap=this.start=this.runProcess=function(){},void(this._disabled=!0))},addLayer:function(r,s){var e=r._task,t=this._handlers[r.id]=[],i="complete";this.drawFeatures===!1&&(r._params.drawMode=!1),this.fetchWithWorker?(this.workerClient||(this.workerClient=n.getClient(this.workerCallback)),e.requestOptions={workerOptions:{worker:this.workerClient}},this.passFeatures&&t.push(e.on(i,a.partial(this._notifyProcessStart,r)))):this.passFeatures?(i=this.drawFeatures?"graphic-draw":"graphic-add",t.push(r.on(i,a.partial(this._sendFeaturesFromLayer,r)))):t.push(e.on(i,a.partial(this._sendFeaturesFromTask,r))),s!==!0&&r.graphics&&this.runProcess(r.graphics,r.id)},removeLayer:function(r){var s=this._handlers[r.id];i.forEach(s,function(r){r.remove()}),delete this._handlers[r.id]},setMap:function(r){if(this.map){if(r==this.map)return;this.unsetMap()}var s=this;i.forEach(this.layers,s.removeLayer),i.forEach(r.graphicsLayerIds,function(e){s.addLayer(r.getLayer(e))}),this._handlers.map=[r.on("layer-add",function(r){var e=r.layer;e.isInstanceOf(h)&&s.addLayer(e)}),r.on("layer-remove",function(r){var e=r.layer;e.isInstanceOf(h)&&s.removeLayer(e)})],this.map=r},unsetMap:function(){if(this.map){var r=this;i.forEach(this._handlers.map,function(r){r.remove()}),delete this._handlers.map,i.forEach(this.layers,r.removeLayer),this.map=null}},start:function(){this.map?this.setMap(this.map):this.layers&&(a.isArray(this.layers)||(this.layers=[this.layers]),i.forEach(this.layers,this.addLayer)),this._started=!0,this.emit("start",{processor:this}),console.log("processor started")},stop:function(){this._started=!1;for(var r in this._handlers)this._handlers.hasOwnProperty(r)&&(this._handlers[r].remove(),delete this._handlers[r]);this.emit("stop",{processor:this}),console.log("processor stopped")},runProcess:function(r,s){},_sendFeaturesFromTask:function(){},_sendFeaturesFromLayer:function(){},_notifyProcessStart:function(){}});return r("extend-esri")&&a.setObject("process.Processor",d,s),d});