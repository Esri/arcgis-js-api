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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when"],(function(e,t,s){var r=e(null,{requests:null,results:null,requestCount:0,chunkSize:0,stopOnError:!1,onProgress:null,index:0,completeCount:0,executeCount:0,isExecuting:!1,dfd:null,constructor:function(e,t,s,r,i){this.requests=e,this.results=t,this.requestCount=this.requests.length,this.chunkSize=Math.max(s,0),this.stopOnError=r,this.onProgress=i},execute:function(){for(this.isExecuting=!0,this.dfd=new t;this.tryStartNextRequest(););return this.dfd.promise},tryStartNextRequest:function(){if(!this.isExecuting)return!1;if(this.index==this.requestCount&&!this.executeCount)return this.isExecuting=!1,this.dfd.resolve(this.results),!1;if(this.index==this.requestCount||this.executeCount==this.chunkSize)return!1;var e=this.requests[this.index++];this.executeCount++;var t=e.request;"function"==typeof t&&(t=t());var r=this,i=!0;return s(t,(function(t){r.processResult(t,e.key,t instanceof Error,i)}),(function(t){r.processResult(t,e.key,!0,i)})),i=!1,!0},processResult:function(e,t,s,r){if(this.isExecuting)if(s&&this.stopOnError)this.isExecuting=!1,this.onProgress&&this.onProgress(1),this.dfd.reject(e);else if(this.results[t]=e,this.completeCount++,this.executeCount--,this.onProgress&&this.onProgress(this.completeCount/this.requestCount),!r)for(;this.tryStartNextRequest(););}});return function(e,t){var s=!1,i=10,n=null;"boolean"==typeof t?s=t:t&&("number"==typeof t.chunkSize&&(i=t.chunkSize),"boolean"==typeof t.stopOnError&&(s=t.stopOnError),"function"==typeof t.onProgress&&(n=t.onProgress));var u,o=[];if(Array.isArray(e))u=[],e.forEach((function(e,t){o.push({key:t,request:e})}));else for(var h in e)u={},o.push({key:h,request:e[h]});return new r(o,u,i,s,n).execute()}}));