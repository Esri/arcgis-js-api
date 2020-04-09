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

define(["dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when"],(function(t,e,s){var i=t(null,{requests:null,results:null,requestCount:0,chunkSize:0,stopOnError:!1,index:0,completeCount:0,executeCount:0,isExecuting:!1,dfd:null,constructor:function(t,e,s,i){this.requests=t,this.results=e,this.requestCount=this.requests.length,this.chunkSize=Number(s),(isNaN(this.chunkSize)||this.chunkSize<=0)&&(this.chunkSize=this.requestCount),this.stopOnError=!!i},execute:function(){for(this.isExecuting=!0,this.dfd=new e;this.tryStartNextRequest(););return this.dfd.promise},tryStartNextRequest:function(){if(!this.isExecuting)return!1;if(this.index==this.requestCount&&!this.executeCount)return this.isExecuting=!1,this.dfd.resolve(this.results),!1;if(this.index==this.requestCount||this.executeCount==this.chunkSize)return!1;var t=this.requests[this.index++];this.executeCount++;var e=t.request;"function"==typeof e&&(e=e());var i=this,r=!0;return s(e,(function(e){i.processResult(e,t.key,e instanceof Error,r)}),(function(e){i.processResult(e,t.key,!0,r)})),r=!1,!0},processResult:function(t,e,s,i){if(this.isExecuting)if(s&&this.stopOnError)this.isExecuting=!1,this.dfd.progress(1),this.dfd.reject(t);else if(this.results[e]=t,this.completeCount++,this.executeCount--,this.dfd.progress(this.completeCount/this.requestCount),!i)for(;this.tryStartNextRequest(););}});return function(t,e,s){void 0===s&&(s=10);var r,u=[];if(Array.isArray(t))r=[],t.forEach((function(t,e){u.push({key:e,request:t})}));else for(var n in t)r={},u.push({key:n,request:t[n]});return new i(u,r,s,e).execute()}}));