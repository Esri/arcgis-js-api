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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../webgl-engine/lib/Util"],(function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AsyncWorkerQueue=e.BaseTask=void 0;var r=function(t){this.clientType=t,this._cancelled=!1,this.size=0,this.duration=0};e.BaseTask=r;var i=function(){function t(t,e,s,r){var i=this;this._workerFunc=t,this._callbackFunc=e,this._maxTotalNumWorkers=s,this._type2id=new Map,this._tasks=new Array,this._typeNumWorkers=new Array,this._typeWorkerQuota=new Array,this._typeStatistics=new Array,this._totalNumWorkers=0,r.forEach((function(t,e){i._type2id.set(e,i._tasks.length),i._tasks.push([]),i._typeNumWorkers.push(0),i._typeStatistics.push({requests:0,size:0,duration:0,speed:0}),i._typeWorkerQuota.push(t)}))}return Object.defineProperty(t.prototype,"numTypes",{get:function(){return this._tasks.length},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"busy",{get:function(){return this._totalNumWorkers>=this._maxTotalNumWorkers},enumerable:!1,configurable:!0}),t.prototype.push=function(t){var e=this,s=this._type2id.get(t.clientType);this._totalNumWorkers<this._maxTotalNumWorkers?(this._typeNumWorkers[s]++,this._totalNumWorkers++,this._workerFunc(t,(function(t,s){return e._taskCallback(t,s)}))):this._tasks[s].push(t)},t.prototype.getStatsForType=function(t){var e=this._type2id.get(t);return{quota:this._typeWorkerQuota[e],workers:this._typeNumWorkers[e],queueSize:this._tasks[e].length,requestStats:this._typeStatistics[e]}},t.prototype.cancel=function(t){this._taskFinished(t),t._cancelled=!0},t.prototype.clear=function(){for(var t=0;t<this._tasks.length;t++)this._tasks[t]=[]},t.prototype._taskFinished=function(t){var e=this._type2id.get(t.clientType);this._typeNumWorkers[e]--,this._totalNumWorkers--,this._typeStatistics[e].requests++,this._typeStatistics[e].size+=t.size||0,this._typeStatistics[e].duration+=t.duration||0,this._typeStatistics[e].speed=this._typeStatistics[e].duration>0?this._typeStatistics[e].size/this._typeStatistics[e].duration:0,s.assert(this._typeNumWorkers[e]>=0),this._next()},t.prototype._next=function(){for(var t=0;t<this.numTypes;++t){if(this._typeNumWorkers[t]<this._typeWorkerQuota[t]&&this._processQueue(t))return;++t}for(t=0;t<this.numTypes;++t)if(this._processQueue(t))return},t.prototype._processQueue=function(t){for(var e=this;this._tasks[t].length>0;)if(this._workerFunc(this._tasks[t].shift(),(function(t,s){return e._taskCallback(t,s)})))return this._typeNumWorkers[t]++,this._totalNumWorkers++,!0;return!1},t.prototype._taskCallback=function(t,e){t._cancelled||(this._callbackFunc(t,e),this._taskFinished(t))},Object.defineProperty(t.prototype,"test",{get:function(){var t=this;return{set workerFunc(e){t._workerFunc=e}}},enumerable:!1,configurable:!0}),t}();e.AsyncWorkerQueue=i}));