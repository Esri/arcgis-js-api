// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../webgl-engine/lib/Util"],function(t,e,s){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e,s){var i=this;this.workerFunc=t,this.callbackFunc=e,this.robin=0,this.type2id=new Map,this.tasks=new Array,this.typeNumWorkers=new Array,this.typeWorkerQuota=new Array,this.typeStatistics=new Array,this.totalNumWorkers=0,this.maxTotalNumWorkers=0,s.forEach(function(t,e){i.type2id.set(e,i.tasks.length),i.tasks.push([]),i.typeNumWorkers.push(0),i.typeStatistics.push({requests:0,size:0,duration:0,speed:0}),i.typeWorkerQuota.push(t),i.maxTotalNumWorkers+=t})}return Object.defineProperty(t.prototype,"numTypes",{get:function(){return this.tasks.length},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"busy",{get:function(){return this.totalNumWorkers>=this.maxTotalNumWorkers},enumerable:!0,configurable:!0}),t.prototype.push=function(t){var e=this,s=this.type2id.get(t.clientType);this.totalNumWorkers<this.maxTotalNumWorkers?(this.typeNumWorkers[s]++,this.totalNumWorkers++,this.workerFunc(t,function(t,s){return e._taskCallback(t,s)})):this.tasks[s].push(t)},t.prototype.getStatsForType=function(t){var e=this.type2id.get(t);return{quota:this.typeWorkerQuota[e],workers:this.typeNumWorkers[e],queueSize:this.tasks[e].length,requestStats:this.typeStatistics[e]}},t.prototype.removeTasks=function(t,e){for(var s=[],i=this.tasks[this.type2id.get(e)],r=0,o=i;r<o.length;r++){var n=o[r];-1===t.indexOf(n)&&s.push(n)}this.tasks[this.type2id.get(e)]=s},t.prototype.workerCancelled=function(t){this.taskFinished(t),t._cancelledInQueue=!0},t.prototype.clear=function(){for(var t=0;t<this.tasks.length;t++)this.tasks[t]=[]},t.prototype.taskFinished=function(t){var e=this.type2id.get(t.clientType);this.typeNumWorkers[e]--,this.totalNumWorkers--,this.typeStatistics[e].requests++,this.typeStatistics[e].size+=t.size||0,this.typeStatistics[e].duration+=t.duration||0,this.typeStatistics[e].speed=this.typeStatistics[e].duration>0?this.typeStatistics[e].size/this.typeStatistics[e].duration:0,s.assert(this.typeNumWorkers[e]>=0),this.next()},t.prototype.next=function(){var t=this.robin,e=!1;do{this.typeNumWorkers[t]<this.typeWorkerQuota[t]&&this.processQueue(t)&&(e=!0),t=(t+1)%this.numTypes}while(!e&&t!==this.robin);if(!e)do{this.processQueue(t)&&(e=!0),t=(t+1)%this.numTypes}while(!e&&t!==this.robin);this.robin=t},t.prototype.processQueue=function(t){for(var e=this;this.tasks[t].length>0;)if(this.workerFunc(this.tasks[t].shift(),function(t,s){return e._taskCallback(t,s)}))return this.typeNumWorkers[t]++,this.totalNumWorkers++,!0;return!1},t.prototype._taskCallback=function(t,e){t._cancelledInQueue||(this.callbackFunc(t,e),this.taskFinished(t))},Object.defineProperty(t.prototype,"test",{get:function(){var t=this;return{set workerFunc(e){t.workerFunc=e}}},enumerable:!0,configurable:!0}),t}();e.AsyncQuotaRoundRobinQueue=i});