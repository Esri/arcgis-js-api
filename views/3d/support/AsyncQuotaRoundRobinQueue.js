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

define(["require","exports","../../../core/arrayUtils","../webgl-engine/lib/Util"],function(t,s,i,e){return function(){function t(t,s,i,e){this.workerFunc=t,this.robin=0,this.type2id={},this.tasks=[],this.typeNumWorkers=[],this.typeWorkerQuota=[],this.typeStatistics=[],this.totalNumWorkers=0,this.maxTotalNumWorkers=0,this.numTypes=0;for(var r in e)this.tasks[this.robin]=[],this.typeNumWorkers[this.robin]=0,this.typeStatistics[this.robin]={requests:0,size:0,duration:0,speed:0},this.typeWorkerQuota[this.robin]=e[r],this.type2id[r]=this.robin++,this.maxTotalNumWorkers+=e[r];this.numTypes=this.tasks.length,this.robin=0;var o=this;this.taskCallback=function(t){t._cancelledInQueue||(s.apply(i,arguments),o.taskFinished(t))}}return t.prototype.setWorkerQuota=function(t){e.assert(i.equals(Object.keys(this.typeWorkerAllication),Object.keys(t))),this.typeWorkerAllication=t,this.maxTotalNumWorkers=0;for(var s in t){var r=this.type2id[s];this.typeWorkerQuota[r]=t[s],this.maxTotalNumWorkers+=t[s]}},t.prototype.setWorkerFunc=function(t){this.workerFunc=t},t.prototype.push=function(t){var s=this.type2id[t.clientType];this.totalNumWorkers<this.maxTotalNumWorkers?(this.typeNumWorkers[s]++,this.totalNumWorkers++,this.workerFunc(t,this.taskCallback)):this.tasks[s].push(t)},t.prototype._getStatsForType=function(t){var s=this.type2id[t];return{quota:this.typeWorkerQuota[s],workers:this.typeNumWorkers[s],queueSize:this.tasks[s].length,requestStats:this.typeStatistics[s]}},t.prototype.removeTasks=function(t,s){for(var i=[],e=this.tasks[this.type2id[s]],r=0,o=e;r<o.length;r++){var h=o[r];-1===t.indexOf(h)&&i.push(h)}this.tasks[this.type2id[s]]=i},t.prototype.workerCancelled=function(t){this.taskFinished(t),t._cancelledInQueue=!0},t.prototype.clear=function(){for(var t=0;t<this.tasks.length;t++)this.tasks[t]=[]},t.prototype.taskFinished=function(t){var s=this.type2id[t.clientType];this.typeNumWorkers[s]--,this.totalNumWorkers--,this.typeStatistics[s].requests++,this.typeStatistics[s].size+=t.size||0,this.typeStatistics[s].duration+=t.duration||0,this.typeStatistics[s].speed=this.typeStatistics[s].duration>0?this.typeStatistics[s].size/this.typeStatistics[s].duration:0,e.assert(this.typeNumWorkers[s]>=0),this.next()},t.prototype.next=function(){var t=this.robin,s=!1;do{this.typeNumWorkers[t]<this.typeWorkerQuota[t]&&this.processQueue(t)&&(s=!0),t=(t+1)%this.numTypes}while(!s&&t!==this.robin);if(!s)do{this.processQueue(t)&&(s=!0),t=(t+1)%this.numTypes}while(!s&&t!==this.robin);this.robin=t},t.prototype.processQueue=function(t){for(;this.tasks[t].length>0;)if(this.workerFunc(this.tasks[t].shift(),this.taskCallback))return this.typeNumWorkers[t]++,this.totalNumWorkers++,!0;return!1},t}()});