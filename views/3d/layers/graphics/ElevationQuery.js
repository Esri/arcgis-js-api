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

define(["require","exports","tslib","../../../../geometry","../../../../core/arrayUtils","../../../../core/maybe","../../../../core/promiseUtils","../../../support/Scheduler"],(function(e,t,r,i,n,o,s,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ElevationQuery=t.ViewElevationProvider=void 0;var a=function(){function e(e,t){this.spatialReference=e,this.view=t}return e.prototype.getElevation=function(e,t,r){return this.view.elevationProvider.getElevation(e,t,0,this.spatialReference,r)},e.prototype.queryElevation=function(e,t,i,n,o){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){return[2,this.view.elevationProvider.queryElevation(e,t,0,this.spatialReference,o,i,n)]}))}))},e}();t.ViewElevationProvider=a;var c=function(){function e(e,t,i,n){var o=this;this.spatialReference=t,this._getElevationQueryProvider=i,this._queries=new Array,this._queryOptions=r.__assign(r.__assign({},n),{ignoreInvisibleLayers:!0}),this._frameTask=e.registerTask(u.Task.ELEVATION_QUERY,(function(){return o._update()}),(function(){return o._queries.length>0}))}return e.prototype.destroy=function(){this._frameTask.remove()},e.prototype.queryElevation=function(e,t,r,i){var o=this;return void 0===i&&(i=0),s.create((function(u,a){var c={x:e,y:t,minDemResolution:i,result:{resolve:u,reject:a},signal:r};o._queries.push(c),s.onAbort(r,(function(){n.remove(o._queries,c),a(s.createAbortError())}))}))},e.prototype._update=function(){var e=this._queries;this._queries=[];var t=this._getElevationQueryProvider();if(t){var n=e.map((function(e){return[e.x,e.y]})),u=e.reduce((function(e,t){return Math.min(e,t.minDemResolution)}),1/0),a=new i.Multipoint({points:n,spatialReference:this.spatialReference}),c=e.length>1&&e.some((function(e){return!!e.signal}))?s.createAbortController():null,l=o.isSome(c)?c.signal:e[0].signal;if(o.isSome(c)){var f=0;e.forEach((function(t){return s.onAbort(t.signal,(function(){f++,t.result.reject(s.createAbortError()),f===e.length&&c.abort()}))}))}var v=r.__assign(r.__assign({},this._queryOptions),{minDemResolution:u,signal:l});t.queryElevation(a,v).then((function(t){e.forEach((function(e,r){o.isSome(e.signal)&&e.signal.aborted?e.result.reject(s.createAbortError()):e.result.resolve(t.geometry.points[r][2])}))})).catch((function(t){e.forEach((function(e){return e.result.reject(t)}))}))}else e.forEach((function(e){return e.result.reject()}))},Object.defineProperty(e.prototype,"test",{get:function(){var e=this;return{update:function(){return e._queries.length>0&&e._update()}}},enumerable:!1,configurable:!0}),e}();t.ElevationQuery=c}));