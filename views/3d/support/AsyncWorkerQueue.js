/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../webgl-engine/lib/Util"],(function(t,s,e){"use strict";let i=function(t){this.client=t,this._cancelled=!1,this.size=0,this.duration=0},n=function(t){this.typeWorkerQuota=t,this.tasks=new Array,this.numWorkers=0,this.statistics=new r},r=function(){this.requests=0,this.size=0,this.duration=0,this.speed=0},o=function(){function t(t,s,e,i){this._workerFunc=t,this._callbackFunc=s,this._maxTotalNumWorkers=e,this._totalNumWorkers=0,this._clients=i.map((t=>new n(t)))}var i=t.prototype;return i.hasQuota=function(t){const s=this._clients[t];return!!s&&(this._totalNumWorkers<this._maxTotalNumWorkers||s.numWorkers+s.tasks.length<s.typeWorkerQuota)},i.push=function(t){const s=this._clients[t.client];s&&(this._totalNumWorkers<this._maxTotalNumWorkers?(s.numWorkers++,this._totalNumWorkers++,this._workerFunc(t,((t,s)=>this._taskCallback(t,s)))):s.tasks.push(t))},i.cancel=function(t){this._taskFinished(t),t._cancelled=!0},i.destroy=function(){this._clients.length=0},i._taskFinished=function(t){const s=this._clients[t.client];this._totalNumWorkers--,s.numWorkers--,s.statistics.requests++,s.statistics.size+=t.size||0,s.statistics.duration+=t.duration||0,s.statistics.speed=s.statistics.duration>0?s.statistics.size/s.statistics.duration:0,e.assert(s.numWorkers>=0),this._next()},i._next=function(){for(const t of this._clients)if(t&&t.numWorkers<t.typeWorkerQuota&&this._processQueue(t))return;for(const t of this._clients)if(t&&this._processQueue(t))return},i._processQueue=function(t){for(;t.tasks.length>0;)if(this._workerFunc(t.tasks.shift(),((t,s)=>this._taskCallback(t,s))))return t.numWorkers++,this._totalNumWorkers++,!0;return!1},i._taskCallback=function(t,s){t._cancelled||(this._callbackFunc(t,s),this._taskFinished(t))},i.getStatsForType=function(t){const s=this._clients[t];return s?{quota:s.typeWorkerQuota,workers:s.numWorkers,queueSize:s.tasks.length,requestStats:s.statistics}:null},s._createClass(t,[{key:"test",get:function(){const t=this;return{set workerFunc(s){t._workerFunc=s}}}}]),t}();t.AsyncWorkerQueue=o,t.BaseTask=i,Object.defineProperty(t,"__esModule",{value:!0})}));
