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

define(["../../../core/arrayUtils","../webgl-engine/lib/Util"],function(e,t){return function(n,r,u,o,i){function s(){return"workers: "+f+", queues: "+c.map(function(e){return e.length})}var a=0,l={},c=[],f=[],h=[],p=[],d=0,g=0;for(var v in o)c[a]=[],f[a]=0,p[a]={requests:0,size:0,duration:0,speed:0},h[a]=o[v],l[v]=a++,g+=o[v];var q=c.length;a=0,this.setWorkerQuota=function(n){t.assert(e.equals(Object.keys(this.typeWorkerAllication),Object.keys(n))),this.typeWorkerAllication=n,g=0;for(var r in n){var u=l[r];h[u]=n[r],g+=n[r]}},this.setWorkerFunc=function(e){n=e},this.push=function(e){var t=l[e.clientType];g>d?(f[t]++,d++,i&&console.log("queue start type "+t+", "+s()),n(e,z)):(c[t].push(e),i&&console.log("queue push type "+t+", "+s()))},this._getStatsForType=function(e){var t=l[e];return{quota:h[t],workers:f[t],queueSize:c[t].length,requestStats:p[t]}},this.removeTasks=function(e,t){for(var n=[],r=c[l[t]],u=0;u<r.length;u++){var o=r[u];e.indexOf(o)>-1||n.push(o)}c[l[t]]=n},this.workerCancelled=function(e){k(e),e._cancelledInQueue=!0},this.clear=function(){for(var e=0;e<c.length;e++)c[e]=[]};var k=function(e){var n=l[e.clientType];f[n]--,d--,p[n].requests++,p[n].size+=e.size||0,p[n].duration+=e.duration||0,p[n].speed=p[n].duration>0?p[n].size/p[n].duration:0,t.assert(f[n]>=0),y()},y=function(){var e=a,t=!1;do f[e]<h[e]&&w(e)&&(t=!0),e=(e+1)%q;while(!t&&e!=a);if(!t)do w(e)&&(t=!0),e=(e+1)%q;while(!t&&e!=a);!t&&i&&console.log("queue sink, "+s()),a=e},w=function(e){for(;c[e].length>0;){if(n(c[e].shift(),z))return i&&console.log("queue startqueued clientType "+e+", "+s()),f[e]++,d++,!0;i&&console.log("queue task cancelled, "+s())}return!1},z=function(e){e._cancelledInQueue||(r.apply(u,arguments),k(e))}}});